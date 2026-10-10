import SectionHeader from "../components/SectionHeader";
import Link from "next/link";
export default function ProjectsLayout({ children }: { children: React.ReactNode }) { return <><SectionHeader active="Projects" />{children}<footer className="footer"><div className="page-shell footer__inner"><p>© 2026 Justin Ho</p><Link href="/contact">Get in touch →</Link></div></footer></>; }
