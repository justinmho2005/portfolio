type HomeHeroProps = {
  includeId?: boolean;
};

export default function HomeHero({
  includeId = true,
}: HomeHeroProps) {
  return (
    <section
      id={includeId ? "top" : undefined}
      className="hero"
    >
      <div className="hero__overlay" />

      <div className="hero__content page-shell">
        <p className="eyebrow">
          Computer Engineering · Northeastern University
        </p>

        <h1>
          Hi, I’m <span>Justin Ho.</span>
        </h1>

        <p className="hero__lead">
          I build thoughtful hardware and software systems, from digital logic
          and embedded design to polished interactive experiences.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View my work
          </a>

          <a className="button button--secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}