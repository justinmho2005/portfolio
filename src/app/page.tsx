export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#top" className="brand">
            Justin Ho
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero__overlay" />

        <div className="hero__content page-shell">
          <p className="eyebrow">Computer Engineering · Northeastern University</p>

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

      <section id="about" className="section section--light">
        <div className="page-shell about-grid">
          <div>
            <p className="section-kicker">About</p>

            <h2>Engineering with both systems thinking and attention to detail.</h2>
          </div>

          <div className="about-copy">
            <p>
              I’m a Computer Engineering student focused on building systems that
              bridge hardware and software.
            </p>

            <p>
              My work spans digital design, embedded systems, software, and
              engineering projects where implementation quality matters just as
              much as the idea itself.
            </p>

            <a className="text-link" href="#experience">
              More about my experience →
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="section section--dark projects-section">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker section-kicker--purple">
                Featured Projects
              </p>

              <h2>Things I’ve built.</h2>
            </div>

            <a className="text-link text-link--light" href="/projects">
              View all projects →
            </a>
          </div>

          <div className="project-stage">
            <article className="project-card project-card--side">
              <div className="project-visual">
                <div className="project-laptop">
                  <div className="project-screen">
                    <span>Project Preview</span>
                  </div>
                </div>
              </div>

              <div className="project-card__content">
                <p className="project-index">01</p>
                <h3>Embedded Systems Project</h3>
                <p>
                  Hardware and software working together in a complete system.
                </p>
              </div>
            </article>

            <article className="project-card project-card--featured">
              <div className="project-visual">
                <div className="project-laptop project-laptop--featured">
                  <div className="project-screen project-screen--featured">
                    <span>Featured Project</span>
                  </div>
                </div>

                <div className="project-hardware">FPGA</div>
              </div>

              <div className="project-card__content">
                <p className="project-index">02</p>
                <h3>Register File + ALU System</h3>
                <p>
                  Digital design, SystemVerilog, verification, and FPGA
                  implementation brought together in one engineering workflow.
                </p>

                <div className="tag-row">
                  <span>SystemVerilog</span>
                  <span>FPGA</span>
                  <span>Vivado</span>
                </div>
              </div>
            </article>

            <article className="project-card project-card--side">
              <div className="project-visual">
                <div className="project-laptop">
                  <div className="project-screen">
                    <span>Project Preview</span>
                  </div>
                </div>
              </div>

              <div className="project-card__content">
                <p className="project-index">03</p>
                <h3>Software Project</h3>
                <p>
                  A polished technical project focused on clean implementation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" className="section section--light">
        <div className="page-shell">
          <div className="section-heading section-heading--dark">
            <div>
              <p className="section-kicker">Experience</p>
              <h2>Engineering in the real world.</h2>
            </div>
          </div>

          <div className="experience-grid">
            <article className="experience-card">
              <p className="experience-card__label">Co-op Experience</p>
              <h3>Company / Role</h3>
              <p>
                A future space for your first substantial co-op experience,
                responsibilities, technologies, and measurable impact.
              </p>
              <div className="tag-row tag-row--light">
                <span>Engineering</span>
                <span>Collaboration</span>
                <span>Systems</span>
              </div>
            </article>

            <article className="experience-card">
              <p className="experience-card__label">Co-op Experience</p>
              <h3>Company / Role</h3>
              <p>
                A second professional experience card following the same visual
                system and structure.
              </p>
              <div className="tag-row tag-row--light">
                <span>Development</span>
                <span>Testing</span>
                <span>Problem Solving</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="skills-strip">
        <div className="page-shell">
          <p className="section-kicker section-kicker--purple">Technical Skills</p>

          <div className="skills-grid">
            <div>
              <h3>Hardware</h3>
              <p>FPGA · Digital Logic · Embedded Systems · Circuit Design</p>
            </div>

            <div>
              <h3>Software</h3>
              <p>TypeScript · Python · C/C++ · React · Next.js</p>
            </div>

            <div>
              <h3>Tools</h3>
              <p>Vivado · Git · VS Code · MATLAB · Simulation</p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section section--light">
        <div className="page-shell education-grid">
          <div>
            <p className="section-kicker">Education</p>
            <h2>Northeastern University</h2>
            <p className="education-degree">B.S. in Computer Engineering</p>
          </div>

          <div className="education-panel">
            <p>
              A curriculum built around engineering fundamentals, digital
              systems, computer architecture, embedded systems, and experiential
              learning through Northeastern’s co-op model.
            </p>

            <a className="text-link" href="/education">
              Explore education →
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-cta">
        <div className="contact-cta__overlay" />

        <div className="page-shell contact-cta__content">
          <p className="section-kicker section-kicker--purple">Contact</p>

          <h2>Let’s build something.</h2>

          <p>
            I’m always interested in engineering opportunities, technical
            projects, and conversations about interesting systems.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="mailto:your-email@example.com">
              Email me
            </a>

            <a className="button button--secondary" href="#">
              LinkedIn
            </a>

            <a className="button button--secondary" href="#">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="page-shell footer__inner">
          <p>© 2026 Justin Ho</p>
          <p>Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}