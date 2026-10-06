"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import HomeHeader from "./HomeHeader";
import HomeHero from "./HomeHero";

const INTRO_SESSION_KEY = "portfolio-intro-complete";

const VIRTUAL_SCROLL_DISTANCE = 1050;

/*
  The site takes over around the halfway point.
*/
const AUTO_FINISH_THRESHOLD = 0.48;

/*
  Long cinematic pull into the final Home viewport.
*/
const AUTO_FINISH_DURATION = 2200;

type CameraGeometry = {
  targetScale: number;
  targetX: number;
  targetY: number;
  originX: number;
  originY: number;
};

function clamp(
  value: number,
  min = 0,
  max = 1
) {
  return Math.min(
    Math.max(value, min),
    max
  );
}

function remap(
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
) {
  if (inputMin === inputMax) {
    return outputMin;
  }

  const normalized = clamp(
    (value - inputMin) /
      (inputMax - inputMin)
  );

  return (
    outputMin +
    (outputMax - outputMin) *
      normalized
  );
}

function smoothstep(value: number) {
  const t = clamp(value);

  return t * t * (3 - 2 * t);
}

/*
  Gentle start, smooth acceleration through the middle,
  and a soft landing at the final Home viewport.
*/
function easeInOutSine(value: number) {
  const t = clamp(value);

  return -(
    Math.cos(Math.PI * t) - 1
  ) / 2;
}

export default function IntroTransition() {
  const [isVisible, setIsVisible] =
    useState(true);

  const [isReady, setIsReady] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const [camera, setCamera] =
    useState<CameraGeometry>({
      targetScale: 5,
      targetX: 0,
      targetY: 0,
      originX: 0,
      originY: 0,
    });

  const laptopRef =
    useRef<HTMLDivElement>(null);

  const screenRef =
    useRef<HTMLDivElement>(null);

  const progressRef =
    useRef(0);

  const touchYRef =
    useRef<number | null>(null);

  const completedRef =
    useRef(false);

  const autoFinishingRef =
    useRef(false);

  const autoFinishFrameRef =
    useRef<number | null>(null);

  const completionTimerRef =
    useRef<number | null>(null);

  const calculateCamera =
    useCallback(() => {
      const laptop =
        laptopRef.current;

      const screen =
        screenRef.current;

      if (!laptop || !screen) {
        return;
      }

      const laptopRect =
        laptop.getBoundingClientRect();

      const screenRect =
        screen.getBoundingClientRect();

      if (
        !screenRect.width ||
        !screenRect.height
      ) {
        return;
      }

      const screenCenterX =
        screenRect.left +
        screenRect.width / 2;

      const screenCenterY =
        screenRect.top +
        screenRect.height / 2;

      const viewportCenterX =
        window.innerWidth / 2;

      const viewportCenterY =
        window.innerHeight / 2;

      const widthScale =
        window.innerWidth /
        screenRect.width;

      const heightScale =
        window.innerHeight /
        screenRect.height;

      /*
        Slight overscan ensures the laptop bezel is already
        beyond the viewport edges before the intro disappears.
      */
      const targetScale =
        Math.max(
          widthScale,
          heightScale
        ) * 1.025;

      /*
        Anchor the scale around the center of the display,
        not the center of the full laptop.
      */
      const originX =
        screenCenterX -
        laptopRect.left;

      const originY =
        screenCenterY -
        laptopRect.top;

      /*
        Bring the display center exactly onto the browser
        viewport center at the end of the transition.
      */
      const targetX =
        viewportCenterX -
        screenCenterX;

      const targetY =
        viewportCenterY -
        screenCenterY;

      setCamera({
        targetScale,
        targetX,
        targetY,
        originX,
        originY,
      });
    }, []);

  const finishIntro =
    useCallback(() => {
      if (completedRef.current) {
        return;
      }

      completedRef.current = true;

      window.sessionStorage.setItem(
        INTRO_SESSION_KEY,
        "true"
      );

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      /*
        Immediately restore normal page scrolling once
        the cinematic zoom has fully completed.
      */
      document.documentElement.classList.remove(
        "intro-active"
      );

      document.body.classList.remove(
        "intro-active"
      );

      /*
        Remove this as well in case it remains from
        an older hot-reloaded version during development.
      */
      document.documentElement.classList.remove(
        "intro-settling"
      );

      document.body.classList.remove(
        "intro-settling"
      );

      setIsVisible(false);
    }, []);

  const scheduleCompletion =
    useCallback(() => {
      if (
        completionTimerRef.current !==
        null
      ) {
        return;
      }

      /*
        Tiny buffer lets the last animation frame fully
        render before the intro layer disappears.
      */
      completionTimerRef.current =
        window.setTimeout(() => {
          finishIntro();
        }, 130);
    }, [finishIntro]);

  const beginAutoFinish =
    useCallback(() => {
      if (
        autoFinishingRef.current ||
        completedRef.current
      ) {
        return;
      }

      autoFinishingRef.current = true;

      const startProgress =
        progressRef.current;

      const remaining =
        1 - startProgress;

      const startTime =
        performance.now();

      function animate(
        currentTime: number
      ) {
        if (
          completedRef.current
        ) {
          return;
        }

        const elapsed =
          currentTime -
          startTime;

        const normalized =
          clamp(
            elapsed /
              AUTO_FINISH_DURATION
          );

        const eased =
          easeInOutSine(
            normalized
          );

        const nextProgress =
          startProgress +
          remaining * eased;

        progressRef.current =
          nextProgress;

        setProgress(
          nextProgress
        );

        if (normalized < 1) {
          autoFinishFrameRef.current =
            window.requestAnimationFrame(
              animate
            );

          return;
        }

        progressRef.current = 1;

        setProgress(1);

        scheduleCompletion();
      }

      autoFinishFrameRef.current =
        window.requestAnimationFrame(
          animate
        );
    }, [scheduleCompletion]);

  const updateProgress =
    useCallback(
      (nextProgress: number) => {
        if (
          completedRef.current ||
          autoFinishingRef.current
        ) {
          return;
        }

        const next =
          clamp(nextProgress);

        progressRef.current =
          next;

        setProgress(next);

        /*
          Once the user has clearly committed to entering
          the site, transition control passes to the
          cinematic auto-finish.
        */
        if (
          next >=
          AUTO_FINISH_THRESHOLD
        ) {
          beginAutoFinish();
        }
      },
      [beginAutoFinish]
    );

  useEffect(() => {
    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const params =
      new URLSearchParams(
        window.location.search
      );

    const forceReplay =
      params.get("intro") === "1";

    const alreadyPlayed =
      window.sessionStorage.getItem(
        INTRO_SESSION_KEY
      ) === "true";

    if (
      reducedMotion ||
      (alreadyPlayed &&
        !forceReplay)
    ) {
      completedRef.current = true;

      const timer =
        window.setTimeout(() => {
          setIsVisible(false);
        }, 0);

      return () => {
        window.clearTimeout(
          timer
        );
      };
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    document.documentElement.classList.add(
      "intro-active"
    );

    document.body.classList.add(
      "intro-active"
    );

    /*
      Clear any stale development state left behind
      by an earlier hot reload.
    */
    document.documentElement.classList.remove(
      "intro-settling"
    );

    document.body.classList.remove(
      "intro-settling"
    );

    const readyTimer =
      window.setTimeout(() => {
        setIsReady(true);
      }, 50);

    const measurementTimer =
      window.setTimeout(() => {
        calculateCamera();
      }, 120);

    return () => {
      window.clearTimeout(
        readyTimer
      );

      window.clearTimeout(
        measurementTimer
      );

      if (
        autoFinishFrameRef.current !==
        null
      ) {
        window.cancelAnimationFrame(
          autoFinishFrameRef.current
        );
      }

      if (
        completionTimerRef.current !==
        null
      ) {
        window.clearTimeout(
          completionTimerRef.current
        );
      }

      document.documentElement.classList.remove(
        "intro-active"
      );

      document.body.classList.remove(
        "intro-active"
      );

      document.documentElement.classList.remove(
        "intro-settling"
      );

      document.body.classList.remove(
        "intro-settling"
      );
    };
  }, [calculateCamera]);

  useEffect(() => {
    if (
      !isVisible ||
      !isReady
    ) {
      return;
    }

    function handleWheel(
      event: WheelEvent
    ) {
      event.preventDefault();

      /*
        Once the automatic camera movement begins,
        additional wheel input no longer changes
        the transition.
      */
      if (
        autoFinishingRef.current
      ) {
        return;
      }

      const normalizedDelta =
        clamp(
          event.deltaY,
          -120,
          120
        ) /
        VIRTUAL_SCROLL_DISTANCE;

      updateProgress(
        progressRef.current +
          normalizedDelta
      );
    }

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (
        event.key === "Escape"
      ) {
        event.preventDefault();

        finishIntro();

        return;
      }

      if (
        autoFinishingRef.current
      ) {
        event.preventDefault();

        return;
      }

      if (
        event.key ===
          "ArrowDown" ||
        event.key ===
          "PageDown" ||
        event.key === " " ||
        event.key === "Enter"
      ) {
        event.preventDefault();

        updateProgress(
          progressRef.current +
            0.1
        );

        return;
      }

      if (
        event.key ===
          "ArrowUp" ||
        event.key ===
          "PageUp"
      ) {
        event.preventDefault();

        updateProgress(
          progressRef.current -
            0.1
        );
      }
    }

    function handleTouchStart(
      event: TouchEvent
    ) {
      touchYRef.current =
        event.touches[0]
          ?.clientY ??
        null;
    }

    function handleTouchMove(
      event: TouchEvent
    ) {
      if (
        autoFinishingRef.current
      ) {
        event.preventDefault();

        return;
      }

      const currentY =
        event.touches[0]
          ?.clientY;

      if (
        currentY === undefined ||
        touchYRef.current ===
          null
      ) {
        return;
      }

      event.preventDefault();

      const deltaY =
        touchYRef.current -
        currentY;

      touchYRef.current =
        currentY;

      updateProgress(
        progressRef.current +
          deltaY /
            VIRTUAL_SCROLL_DISTANCE
      );
    }

    function handleTouchEnd() {
      touchYRef.current = null;
    }

    function handleResize() {
      if (
        autoFinishingRef.current
      ) {
        return;
      }

      if (
        progressRef.current > 0
      ) {
        progressRef.current = 0;

        setProgress(0);

        window.requestAnimationFrame(
          () => {
            calculateCamera();
          }
        );

        return;
      }

      calculateCamera();
    }

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    window.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove,
      {
        passive: false,
      }
    );

    window.addEventListener(
      "touchend",
      handleTouchEnd
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [
    calculateCamera,
    finishIntro,
    isReady,
    isVisible,
    updateProgress,
  ]);

  if (!isVisible) {
    return null;
  }

  /*
    Both manual scrolling and the automatic takeover
    feed the same progress timeline.
  */
  const zoomProgress =
    smoothstep(
      remap(
        progress,
        0.02,
        1,
        0,
        1
      )
    );

  const laptopScale =
    1 +
    (camera.targetScale - 1) *
      zoomProgress;

  const laptopX =
    camera.targetX *
    zoomProgress;

  const laptopY =
    camera.targetY *
    zoomProgress;

  /*
    At the final frame:

    laptopScale × replicaScale = 1

    so the Home page inside the laptop reaches exact
    browser scale immediately before the overlay disappears.
  */
  const replicaScale =
    1 /
    camera.targetScale;

  const environmentOpacity =
    remap(
      progress,
      0.25,
      0.82,
      1,
      0
    );

  const outsideNavOpacity =
    remap(
      progress,
      0.04,
      0.25,
      1,
      0
    );

  const promptOpacity =
    remap(
      progress,
      0,
      0.08,
      1,
      0
    );

  const shadowOpacity =
    remap(
      progress,
      0.22,
      0.68,
      0.72,
      0
    );

  const style = {
    "--intro-progress":
      progress,

    "--intro-laptop-scale":
      laptopScale,

    "--intro-laptop-x":
      `${laptopX}px`,

    "--intro-laptop-y":
      `${laptopY}px`,

    "--intro-origin-x":
      `${camera.originX}px`,

    "--intro-origin-y":
      `${camera.originY}px`,

    "--intro-replica-scale":
      replicaScale,

    "--intro-environment-opacity":
      environmentOpacity,

    "--intro-outside-nav-opacity":
      outsideNavOpacity,

    "--intro-prompt-opacity":
      promptOpacity,

    "--intro-shadow-opacity":
      shadowOpacity,
  } as CSSProperties;

  return (
    <div
      className={`intro-scroll ${
        isReady
          ? "intro-scroll--ready"
          : ""
      }`}
      style={style}
      aria-label="Scroll to enter portfolio"
    >
      <div className="intro-environment">
        <div className="intro-environment__image" />

        <div className="intro-environment__shade" />

        <div className="intro-environment__foreground" />
      </div>

      <div className="intro-outside-header">
        <HomeHeader />
      </div>

      <div className="intro-stage">
        <div
          ref={laptopRef}
          className="intro-laptop-realistic"
        >
          <div className="intro-laptop-realistic__lid">
            <div
              ref={screenRef}
              className="intro-laptop-realistic__screen"
            >
              <div className="intro-home-replica">
                <HomeHeader />

                <HomeHero
                  includeId={false}
                />
              </div>
            </div>

            <div className="intro-laptop-realistic__camera" />
          </div>

          <div className="intro-laptop-realistic__hinge" />

          <div className="intro-laptop-realistic__deck">
            <div className="intro-laptop-realistic__keyboard">
              {Array.from({
                length: 60,
              }).map(
                (_, index) => (
                  <span
                    key={index}
                  />
                )
              )}
            </div>

            <div className="intro-laptop-realistic__trackpad" />
          </div>
        </div>

        <div className="intro-contact-shadow" />
      </div>

      <div className="intro-scroll__prompt">
        <div className="intro-scroll__mouse">
          <span />
        </div>

        <span>
          Scroll to Enter
        </span>
      </div>
    </div>
  );
}