import Link from "next/link";
export default function HomeHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <a href="#top" className="brand">
          Justin Ho
        </a>

        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/education">Education</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
