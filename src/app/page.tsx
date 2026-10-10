import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "../data/projects";

import HomeHeader from "./components/HomeHeader";
import HomeHero from "./components/HomeHero";
import IntroTransition from "./components/IntroTransition";

export default function Home() {
  return (
    <>
      <IntroTransition />

      <main className="site-content">
        <HomeHeader />
        <HomeHero />

        <section
          id="about"
          className="section section--light"
        >
          <div className="page-shell about-grid">
            <div>
              <p className="section-kicker">
                About
              </p>

              <h2>
                Engineering with both systems
                thinking and attention to detail.
              </h2>
            </div>

            <div className="about-copy">
              <p>I’m Justin, a Computer Engineering student at Northeastern University. My work connects digital hardware, embedded software, and the circuits that turn physical signals into usable information.</p>
              <p>My projects span FPGA-based servo control, a RISC-V-style processor, ECG signal conditioning, and analog circuit design. They give me experience moving between system diagrams, implementation, simulation, and measurements.</p>
              <p>Through co-ops at Fresenius Medical Care and Charles River Development, I’ve worked on embedded software verification, containerization, deployment workflows, and integration testing.</p>
              <p>Across these areas, I’m interested in how the pieces fit together: how hardware and software interact, how a design behaves in practice, and how testing helps make that behavior easier to understand.</p>
              <Link className="text-link" href="/experience">More about my experience →</Link>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="section section--dark projects-section"
        >
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker section-kicker--purple">
                  Featured Projects
                </p>

                <h2>
                  Highlighted work.
                </h2>
              </div>

              <Link
                className="text-link text-link--light"
                href="/projects"
              >
                View all projects →
              </Link>
            </div>

            <div className="project-showcase">
              <div className="project-laptops">{projects.filter(project => project.slug !== "analog-circuit-design").map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section section--light"
        >
          <div className="page-shell">
            <div className="section-heading section-heading--dark">
              <div>
                <p className="section-kicker">
                  Experience
                </p>

                <h2>
                  Engineering in the real world.
                </h2>
              </div>
            </div>

            <div className="experience-grid">
              <article className="experience-card">
                <p className="experience-card__label">
                  Jul 2026 – Present ·
                  Lawrence, MA
                </p>

                <h3>
                  Fresenius Medical Care
                </h3>

                <p>
                  <strong>
                    Embedded Software Engineering
                    Co-op
                  </strong>
                </p>

                <p>
                  Contributing to an embedded Audit
                  Log system using C++ and JSON, with
                  a focus on refactoring for
                  maintainability, developing
                  mock-based unit tests, and
                  improving test automation to make
                  verification more scalable and
                  resilient to future software
                  changes.
                </p>

                <div className="tag-row tag-row--light">
                  <span>
                    C++
                  </span>

                  <span>
                    JSON
                  </span>

                  <span>
                    Linux
                  </span>

                  <span>
                    Unit Testing
                  </span>

                  <span>
                    Mocks
                  </span>

                  <span>
                    Test Automation
                  </span>
                </div>
              </article>

              <article className="experience-card">
                <p className="experience-card__label">
                  Jan 2025 – Jun 2025 ·
                  Burlington, MA
                </p>

                <h3>
                  Charles River Development
                </h3>

                <p>
                  <strong>
                    Software Engineer Co-op
                  </strong>
                </p>

                <p>
                  Worked on the Charles River Wealth
                  Hub, implementing Docker-based
                  containerization, supporting
                  deployment workflows across
                  distributed microservices, and
                  performing integration testing to
                  improve release reliability and
                  environment reproducibility.
                </p>

                <div className="tag-row tag-row--light">
                  <span>
                    Docker
                  </span>

                  <span>
                    Microservices
                  </span>

                  <span>
                    Integration Testing
                  </span>

                  <span>
                    Deployment
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="skills-strip">
          <div className="page-shell">
            <p className="section-kicker section-kicker--purple">
              Technical Skills
            </p>

            <div className="skills-grid">
              <div>
                <h3>
                  Hardware
                </h3>

                <p>
                  FPGA · Digital Logic · Embedded
                  Systems · Circuit Design
                </p>
              </div>

              <div>
                <h3>
                  Software
                </h3>

                <p>
                  TypeScript · Python · C/C++ ·
                  React · Next.js
                </p>
              </div>

              <div>
                <h3>
                  Tools
                </h3>

                <p>
                  Vivado · Git · VS Code · MATLAB ·
                  Simulation
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="education"
          className="section section--light"
        >
          <div className="page-shell education-grid">
            <div>
              <p className="section-kicker">
                Education
              </p>

              <h2>
                Northeastern University
              </h2>

              <p className="education-degree">
                B.S. in Computer Engineering
              </p>
            </div>

            <div className="education-panel">
              <p>
                A curriculum built around engineering
                fundamentals, digital systems,
                computer architecture, embedded
                systems, and experiential learning
                through Northeastern’s co-op model.
              </p>

              <Link
                className="text-link"
                href="/education"
              >
                Explore education →
              </Link>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-cta"
        >
          <div className="contact-cta__overlay" />

          <div className="page-shell contact-cta__content">
            <p className="section-kicker section-kicker--purple">
              Contact
            </p>

            <h2>
              Let’s build something.
            </h2>

            <p>
              I’m always interested in engineering
              opportunities, technical projects, and
              conversations about interesting
              systems.
            </p>

            <div className="hero__actions">
              <Link className="button button--primary" href="/contact">Get in touch</Link>

              <span className="contact-placeholder">LinkedIn — link to add</span>

              <span className="contact-placeholder">GitHub — link to add</span>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="page-shell footer__inner">
            <p>
              © 2026 Justin Ho
            </p>

            <p>
              Built with Next.js
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}







