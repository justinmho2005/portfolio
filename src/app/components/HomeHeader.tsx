export default function HomeHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
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
  );
}