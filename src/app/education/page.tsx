import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../../data/projects";
import styles from "./education.module.css";

export const metadata: Metadata = { title: "Education | Justin Ho", description: "Computer Engineering at Northeastern University: circuit design, digital systems, academic projects, and co-op experience." };

type IconKind = "university" | "degree" | "chip" | "signal" | "code" | "people" | "city" | "briefcase";
function Icon({ kind }: { kind: IconKind }) {
  const paths: Record<IconKind, string> = {
    university: "M2 9l10-6 10 6H2z M5 10v9m5-9v9m4-9v9m5-9v9M2 21h20",
    degree: "M2 9l10-5 10 5-10 5-10-5z M6 12v5c4 3 8 3 12 0v-5M22 9v8",
    chip: "M7 7h10v10H7z M3 8h4m-4 4h4m-4 4h4m10-8h4m-4 4h4m-4 4h4M8 3v4m4-4v4m4-4v4M8 17v4m4-4v4m4-4v4",
    signal: "M2 12h3l3-8 4 16 4-12 3 4h3",
    code: "M8 5l-6 7 6 7m8-14 6 7-6 7M14 3l-4 18",
    people: "M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6M3 21v-4a6 6 0 0 1 12 0v4M17 5a3 3 0 0 1 0 6m1 3a5 5 0 0 1 3 5v2",
    city: "M3 21V9h6v12m0 0V3h6v18m0 0V7h6v14M6 12v1m0 3v1m6-10v1m0 3v1m6-1v1m0 3v1",
    briefcase: "M3 8h18v13H3zM8 8V4h8v4M3 13c6 4 12 4 18 0M10 14h4v3h-4z",
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>;
}

const progression: { title: string; icon: IconKind; topics: string[] }[] = [
  { title: "Foundations", icon: "code", topics: ["Programming", "Circuit fundamentals", "Measurement & analysis"] },
  { title: "Digital systems", icon: "chip", topics: ["Digital logic", "FPGA development", "PWM & servo control"] },
  { title: "Computer architecture", icon: "chip", topics: ["Datapath & control", "Register files & ALUs", "Instruction decoding"] },
  { title: "Circuits & signals", icon: "signal", topics: ["Analog amplification", "Active filters", "Simulation & characterization"] },
  { title: "Engineering in practice", icon: "briefcase", topics: ["Embedded software", "Testing & verification", "Software delivery"] },
];
const coursework = [
  { code: "EECE 2160", term: "Fall 2024", title: "FPGA & servo-control labs", image: "/project-hexapod-scene-v1.png", description: "PWM generation and incremental joint control for the Spider robot.", tags: ["FPGA", "PWM", "Quartus"], href: "/projects/hexapod-robot" },
  { code: "EECE 2150", term: "Fall 2025", title: "Circuits & signals lab work", image: "/project-ecg-scene-v1.png", description: "Circuit measurements, sampling, MATLAB analysis, and ECG amplification and filtering.", tags: ["MATLAB", "Active Filters", "ECG"], href: "/projects/ecg-signal-conditioning" },
  { code: "EECE 2413", term: "Spring 2026", title: "Electronics Laboratory", image: "/projects/analog/frequency-response.png", description: "Op amps, diodes, BJT amplifiers, and MOSFET/CMOS circuit characterization.", tags: ["PSpice", "Breadboarding", "Measurements"], href: "/projects/analog-circuit-design" },
];

function Label({ children }: { children: React.ReactNode }) { return <p className={styles.label}>{children}</p>; }
export default function Page() {
  return <><SectionHeader active="Education" /><main className={styles.page}>
    <section className={styles.hero}><Image src="/education-boston-v1.png" alt="Illustrative Boston skyline across the Charles River at sunset" fill sizes="100vw" preload /><div className={`page-shell ${styles.heroInner}`}><div><Label>Education</Label><h1>Engineering a<br /><span>brighter future.</span></h1><p>A Computer Engineering education at Northeastern University, connecting technical foundations with hands-on projects and real-world experience.</p></div><div className={styles.universityName}><Icon kind="university" /><span>Northeastern<br />University</span></div></div></section>
    <section className={`${styles.section} ${styles.university}`}><div className={`page-shell ${styles.universityGrid}`}><div><Label>01 / University</Label><h2>Northeastern University</h2><p className={styles.accent}>Boston, Massachusetts</p><p>My education brings together hardware, software, and the systems that connect them. Academic projects provide a place to build and test ideas, while co-op experience adds the perspective of engineering teams and production software.</p><div className={styles.highlights}><div><Icon kind="degree" /><span>Computer<br />Engineering</span></div><div><Icon kind="briefcase" /><span>Co-op<br />experience</span></div><div><Icon kind="city" /><span>Boston,<br />Massachusetts</span></div></div></div><figure className={styles.campus}><Image src="/education-campus-v1.png" alt="Conceptual autumn university campus illustration with a glass academic building" width={1536} height={1024} sizes="(max-width: 800px) 100vw, 55vw" /><figcaption>Illustrative campus scene · actual campus photography to add</figcaption></figure></div></section>
    <section className={styles.section}><div className={`page-shell ${styles.degreeGrid}`}><div><Label>02 / Degree</Label><h2>B.S. in Computer Engineering</h2><div className={styles.degreeFacts}><div><Icon kind="degree" /><span>Expected graduation<strong>To add</strong></span></div><div><Icon kind="city" /><span>Location<strong>Boston, Massachusetts</strong></span></div><div><Icon kind="briefcase" /><span>Learning model<strong>Coursework + co-op</strong></span></div></div><p>Connecting digital systems, computer architecture, embedded software, and circuit design through implementation, simulation, and measurement.</p></div><aside className={styles.note}><span aria-hidden="true">“</span><h3>Learning by doing.</h3><p>From a circuit on a breadboard to a processor datapath, project work turns classroom ideas into systems I can examine and improve.</p><Link href="/experience">Explore my co-op experience →</Link></aside></div></section>
    <section className={styles.section}><div className="page-shell"><Label>03 / Learning progression</Label><h2>From fundamentals to <span>practical impact.</span></h2><p className={styles.intro}>A view of the connected areas behind my coursework, projects, and co-ops.</p><ol className={styles.progression}>{progression.map((area, index) => <li key={area.title}><div className={styles.progressionTitle}><Icon kind={area.icon} /><h3>{area.title}</h3></div><ul>{area.topics.map(topic => <li key={topic}>{topic}</li>)}</ul><span className={styles.step}>0{index + 1}</span></li>)}</ol><p className={styles.small}>Areas of learning, rather than a completed-course checklist. Additional course titles will be confirmed later.</p></div></section>
    <section id="coursework" className={styles.section}><div className="page-shell"><div className={styles.headingRow}><div><Label>04 / Selected coursework</Label><h2>Learning in the lab.</h2></div><p>Selected work documented in my lab reports.</p></div><div className={styles.courseGrid}>{coursework.map(course => <Link className={styles.courseCard} href={course.href} key={course.code}><div className={styles.courseImage}><Image src={course.image} alt={course.code === "EECE 2413" ? "Original PSpice frequency-response simulation from the amplifier report" : "Illustrative engineering workspace for this subject"} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><div className={styles.cardBody}><p className={styles.courseCode}>{course.code} · {course.term}</p><h3>{course.title}</h3><p>{course.description}</p><div className={styles.tags}>{course.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className={styles.cardLink}>Explore lab work <span aria-hidden="true">↗</span></span></div></Link>)}</div><p className={styles.small}>Robotics and ECG scenes are illustrative. The electronics plot is an original simulation figure.</p></div></section>
    <section className={styles.section}><div className="page-shell"><div className={styles.headingRow}><div><Label>05 / Projects in practice</Label><h2>Engineering beyond the textbook.</h2></div><Link href="/projects">View all projects →</Link></div><div className={styles.projectGrid}>{projects.map(project => <Link className={styles.projectCard} key={project.slug} href={`/projects/${project.slug}`}><div className={styles.projectImage}><Image src={project.image} alt={project.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" /></div><div className={styles.cardBody}><h3>{project.title}</h3><p>{project.summary}</p><span className={styles.cardLink}>View project <span aria-hidden="true">→</span></span></div></Link>)}</div></div></section>
    <section className={styles.beyond}><div className="page-shell"><Label>06 / Beyond the classroom</Label><h2>A connected learning experience.</h2><div className={styles.beyondGrid}><div><p>Academic work and co-ops give me different ways to approach the same questions: how a system works, how to test it, and how to make it more useful.</p><p className={styles.pending}>Activities, organizations, honors, and additional academic highlights to add.</p></div><div className={styles.beyondFeature}><Icon kind="briefcase" /><h3>Co-op integration</h3><p>Embedded verification and distributed software delivery.</p><Link href="/experience">View experience →</Link></div><div className={styles.beyondFeature}><Icon kind="people" /><h3>Collaboration</h3><p>Learning through shared projects and engineering teams.</p></div><div className={styles.beyondFeature}><Icon kind="city" /><h3>Boston perspective</h3><p>Studying and building in a city shaped by technology and research.</p></div></div></div></section>
  </main><footer className="footer"><div className="page-shell footer__inner"><p>© 2026 Justin Ho</p><Link href="/contact">Let’s connect →</Link></div></footer></>;
}
