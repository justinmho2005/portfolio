import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../data/projects";
import styles from "./projects.module.css";

export const metadata: Metadata = { title: "Projects | Justin Ho", description: "Explore Justin Ho’s robotics, FPGA processor, ECG signal conditioning, and analog circuit projects." };
export default function ProjectsPage() {
  const featured=projects.filter(project=>project.slug!=="analog-circuit-design");
  const analog=projects.find(project=>project.slug==="analog-circuit-design")!;
  return <main className={styles.page}>
    <section className={styles.hero}><div className="page-shell"><p className={styles.label}>Projects</p><h1>Ideas into <span>working systems.</span></h1><p>Exploring hardware, software, and the signals that connect them—through design, implementation, and testing.</p><div className={styles.topics}><span>Robotics</span><span>Digital design</span><span>Analog electronics</span><span>Signal processing</span></div></div></section>
    <section className={styles.work}><div className="page-shell"><div className={styles.heading}><div><p className={styles.label}>01 / Featured projects</p><h2>Highlighted work.</h2></div><p>A closer look at the systems I’ve built and the engineering behind them.</p></div><div className={styles.grid}>{featured.map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div></div></section>
    <section className={styles.explorations}><div className="page-shell"><div className={styles.heading}><div><p className={styles.label}>02 / Further explorations</p><h2>From theory to measurement.</h2></div><p>Hands-on investigations in circuit behavior and electronics.</p></div><article className={styles.analog}><Link href={`/projects/${analog.slug}`} className={styles.plot} aria-label={`View ${analog.title}`}><Image src={analog.image} alt={analog.alt} fill sizes="(max-width: 700px) 90vw, 430px"/><span>Original simulation · EECE 2413</span></Link><div className={styles.analogCopy}><p className={styles.label}>04 / Analog & electronics</p><h3>{analog.title}</h3><p>{analog.summary}</p><div className={styles.tags}>{analog.tags.map(tag=><span key={tag}>{tag}</span>)}</div><Link href={`/projects/${analog.slug}`}>Explore the case study <span aria-hidden="true">→</span></Link></div></article></div></section>
    <section className={styles.cta}><div className={`page-shell ${styles.ctaInner}`}><div><p className={styles.label}>Keep exploring</p><h2>Engineering beyond the project.</h2><p>See how academic work connects with my co-op experience.</p></div><div className={styles.actions}><Link className="button button--primary" href="/experience">View experience →</Link><Link className="button button--secondary" href="/contact">Get in touch →</Link></div></div></section>
  </main>;
}
