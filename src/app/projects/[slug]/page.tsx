import EcgStudy from "../../components/EcgStudy";
import HexapodStudy from "../../components/HexapodStudy";
import ProcessorStudy from "../../components/ProcessorStudy";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  return { title: project ? `${project.title} | Justin Ho` : "Project not found | Justin Ho", description: project?.summary };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <main className="case-study">
    <div className="page-shell">
      <Link href="/projects" className="text-link text-link--light">← All projects</Link>
      <div className="project-page-heading"><p className="section-kicker section-kicker--purple">{project.category}</p><h1>{project.title}</h1><p>{project.summary}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
      <figure className="case-study__scene"><Image src={project.image} alt={project.alt} width={1536} height={1024} sizes="(max-width: 1200px) 95vw, 1180px" /><figcaption>{project.slug === "analog-circuit-design" ? <><span>Original PSpice AC sweep from the Lab 4 report (simulation). </span><a href={project.image} target="_blank" rel="noreferrer">Open full-size plot ↗</a></> : "Illustrative project scene."}</figcaption></figure>
      {project.slug === "riscv-processor" ? <ProcessorStudy /> : project.slug === "hexapod-robot" ? <HexapodStudy /> : project.slug === "ecg-signal-conditioning" ? <EcgStudy /> : <><div className="case-study__body"><aside><p className="section-kicker section-kicker--purple">Project overview</p><p>{project.category}</p></aside>
        <div>{project.slug === "analog-circuit-design" && <figure className="case-study__diagram analog-schematic"><a href="/projects/analog/amplifier-schematic.png" target="_blank" rel="noreferrer"><Image src="/projects/analog/amplifier-schematic.png" alt="Original hand-drawn BJT amplifier design with bias network, split emitter resistor, and bypass capacitor" width={350} height={357} /></a><figcaption>Original amplifier design from Lab 4. <a href="/projects/analog/amplifier-schematic.png" target="_blank" rel="noreferrer">Open full size ↗</a></figcaption></figure>}{project.sections.map(section => <section className="case-study__section" key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
        {project.slug === "riscv-processor" && <figure className="case-study__diagram"><a href="/riscv-datapath.png" target="_blank" rel="noreferrer" aria-label="Open full-size processor datapath in a new tab"><Image src="/riscv-datapath.png" alt="Original processor datapath showing memory, registers, instruction decoding, ALU, and control connections" width={1200} height={900} sizes="(max-width: 760px) 90vw, 800px" /></a><figcaption><a href="/riscv-datapath.png" target="_blank" rel="noreferrer">Open original datapath at full size ↗</a></figcaption></figure>}
        </div>
      </div>
      <section className="content-panel case-study__draft"><h2>More about this project</h2><div className="content-grid"><div><h3>My contribution</h3><p className="content-placeholder">To add: individual responsibilities and team context.</p></div><div><h3>Challenges and decisions</h3><p className="content-placeholder">To add: technical challenges, tradeoffs, and design decisions.</p></div><div><h3>Results and lessons</h3><p className="content-placeholder">To add: verified results, testing, and lessons learned.</p></div><div><h3>Project resources</h3><p className="content-placeholder">To add: repository, report, demonstration, and supporting screenshots.</p></div></div></section></>}<nav className="case-study__next" aria-label="Project navigation"><Link href="/projects">All projects</Link><Link href={`/projects/${next.slug}`}>Next: {next.title} →</Link></nav>
    </div>
  </main>;
}







