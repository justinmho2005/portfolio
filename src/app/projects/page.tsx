import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../data/projects";
export const metadata: Metadata = { title: "Projects | Justin Ho", description: "Explore Justin Ho’s robotics, FPGA processor, and ECG signal conditioning projects." };
export default function ProjectsPage() {
  return <main className="section section--dark projects-section projects-index">
    <div className="page-shell">
      <Link href="/#projects" className="text-link text-link--light">← Back to Home</Link>
      <div className="project-page-heading"><p className="section-kicker section-kicker--purple">Projects</p><h1>Hardware. Software.<br />Connected.</h1><p>Selected work across robotics, digital design, analog electronics, and signal processing.</p></div>
      <div className="project-laptops">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
    </div>
  </main>;
}


