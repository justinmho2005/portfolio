import Link from "next/link";
export default function SectionHeader({ active }: { active: string }) { return <header className="site-header"><div className="site-header__inner page-shell"><Link className="brand" href="/#top">Justin Ho</Link><nav className="nav" aria-label="Primary navigation">{[["About","/#about"],["Projects","/projects"],["Experience","/experience"],["Education","/education"],["Résumé","/resume"],["Contact","/contact"]].map(([label,href]) => <Link key={label} href={href} aria-current={label === active ? "page" : undefined}>{label}</Link>)}</nav></div></header>; }

