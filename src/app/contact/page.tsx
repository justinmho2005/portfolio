import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import styles from "./contact.module.css";

export const metadata: Metadata = { title: "Contact | Justin Ho", description: "Connect with Justin Ho about engineering, projects, and future opportunities." };

type IconKind = "email" | "linkedin" | "github" | "file" | "work" | "people" | "message";
function Icon({ kind }: { kind: IconKind }) {
  if (kind === "linkedin") return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M2 8h4v14H2zm7 0h4v2c1-2 3-3 5-2 3 0 4 2 4 6v8h-4v-8c0-2-1-3-2-3-2 0-3 1-3 3v8H9z" /></svg>;
  if (kind === "github") return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1a11 11 0 0 0-3.5 21.4c.5.1.7-.2.7-.5v-2c-3 .7-3.6-1.3-3.6-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.5 1.5 3 .9.1-.7.4-1.2.7-1.5-2.4-.3-4.9-1.2-4.9-5.4 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.2-2.5 5.1-4.9 5.4.4.3.7 1 .7 2v3c0 .3.2.6.7.5A11 11 0 0 0 12 1" /></svg>;
  const paths = {
    email: "M2 5h20v14H2z M2 5l10 8L22 5M2 19l6-6m14 6-6-6",
    file: "M5 2h9l5 5v15H5z M14 2v6h5M9 12h6m-6 4h6",
    work: "M3 8h18v13H3zM8 8V4h8v4M3 13c6 4 12 4 18 0M10 14h4v3h-4z",
    people: "M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6M3 21v-4a6 6 0 0 1 12 0v4M17 5a3 3 0 0 1 0 6m1 3a5 5 0 0 1 3 5v2",
    message: "M3 4h18v13H9l-5 4v-4H3zM7 9h10M7 12h6",
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>;
}

const channels: { title: string; icon: IconKind; description: string; action: string }[] = [
  { title: "Email", icon: "email", description: "The quickest way to start a conversation.", action: "Email address to add" },
  { title: "LinkedIn", icon: "linkedin", description: "Connect professionally and explore my experience.", action: "Profile link to add" },
  { title: "GitHub", icon: "github", description: "Explore my projects, experiments, and code.", action: "Profile link to add" },
];
export default function Page() {
  return <><SectionHeader active="Contact" /><main className={styles.page}>
    <section className={styles.hero}><div className="page-shell"><p className={styles.label}>Contact</p><h1>Let’s build<br /><span>something.</span></h1><p className={styles.lead}>Whether you’re interested in my work, have an engineering opportunity, or just want to connect, I’d love to hear from you.</p></div></section>
    <section className={styles.connect}><div className="page-shell"><p className={styles.label}>01 / Connect</p><h2>Reach out directly.</h2><p className={styles.intro}>I’m always open to conversations about engineering, technology, and interesting problems. My contact links will live here.</p><div className={styles.channels}>{channels.map((channel, index) => <article className={styles.channel} key={channel.title}><div className={styles.channelIcon}><Icon kind={channel.icon} /></div><h3>{channel.title}</h3><p>{channel.description}</p><button className={index === 0 ? styles.primary : styles.outline} type="button" disabled>{channel.action}<span aria-hidden="true">→</span></button></article>)}</div>
    <div className={styles.resume}><Icon kind="file" /><div><h3>Résumé</h3><p>A concise overview of my education, experience, projects, and technical skills.</p></div><button className={styles.outline} type="button" disabled>Résumé to add <span aria-hidden="true">↓</span></button></div>
    <div className={styles.opportunities}><p className={styles.label}>02 / More ways to connect</p><h2>Open to what’s next.</h2><div className={styles.opportunityGrid}><article><Icon kind="work" /><div><h3>Engineering opportunities</h3><p>Conversations about hardware, embedded software, and systems engineering.</p></div></article><article><Icon kind="people" /><div><h3>Project collaboration</h3><p>Have a project idea or a technical challenge? Let’s explore what we could build.</p></div></article><article><Icon kind="message" /><div><h3>General questions</h3><p>Questions about my projects, experience, or approach to engineering are welcome.</p></div></article></div></div></div></section>
    <figure className={styles.scene}><Image src="/contact-workspace-v1.png" alt="Illustrative laptop and FPGA workspace overlooking a mountain lake at sunset" fill sizes="100vw" /><figcaption>Illustrative engineering workspace</figcaption></figure>
    <section className={styles.closing}><div className={`page-shell ${styles.closingGrid}`}><div><p className={styles.label}>03 / Final thoughts</p><h2>Thanks for stopping by.</h2><p>I’m excited to meet new people, learn about interesting work, and be part of building what’s next.</p><Link href="/projects" className={styles.explore}>Explore my work →</Link></div><div className={styles.thought}><span aria-hidden="true">“</span><p>Good ideas, great people, and real-world problems—that’s where I want to be.</p></div></div></section>
  </main><footer className="footer"><div className="page-shell footer__inner"><p>© 2026 Justin Ho</p><Link href="/#top">Back to Home ↑</Link></div></footer></>;
}
