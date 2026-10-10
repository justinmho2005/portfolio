import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import { experience } from "../../data/experience";
export const metadata: Metadata = { title: "Experience | Justin Ho", description: "Justin Ho’s co-op experience in embedded software, verification, containerization, and distributed software systems." };

const details = [
  {
    id: "fresenius",
    context: "Embedded Audit Log software",
    description: "Work on an embedded Audit Log system using C++ and JSON, with maintainability and verification as central areas of focus.",
    contributions: [
      ["Refactoring", "Refactoring the existing software with a focus on maintainability."],
      ["Mock-based unit tests", "Developing tests that use mocks to exercise software behavior."],
      ["Test automation", "Improving automation to support scalable verification and future software changes."]
    ],
    challenges: "To add: a concrete refactoring or testing challenge, constraints, options considered, and the approach taken.",
    outcomes: "To add: completed milestones, verified improvements, and an example of the work’s impact.",
    reflection: "To add: lessons from embedded software development, testing, and working with the engineering team."
  },
  {
    id: "charles-river",
    context: "Charles River Wealth Hub",
    description: "Software engineering work spanning containerization, deployment workflows, and integration testing across distributed microservices.",
    contributions: [
      ["Containerization", "Implementing Docker-based containerization to support reproducible software environments."],
      ["Deployment workflows", "Supporting deployment workflows across distributed microservices."],
      ["Integration testing", "Performing integration testing with a focus on release reliability and environment reproducibility."]
    ],
    challenges: "To add: a specific environment, deployment, or service-integration issue and how it was investigated.",
    outcomes: "To add: delivered work, verified reliability improvements, and the scope of individual ownership.",
    reflection: "To add: lessons from distributed systems, deployment, and collaboration on a production software team."
  }
];

export default function Page() {
  return <>
    <SectionHeader active="Experience" />
    <main className="content-page"><div className="page-shell">
      <Link href="/#top" className="text-link text-link--light">← Back to Home</Link>
      <div className="project-page-heading"><p className="section-kicker section-kicker--purple">Experience</p><h1>Engineering in the real world.</h1><p>Co-op experience connecting embedded software and verification with containerization, deployment, and distributed systems.</p></div>
      <nav className="study-outline" aria-label="Experience sections">{experience.map((job,index) => <a key={job.company} href={`#${details[index].id}`}>{job.company}</a>)}</nav>
      <div className="content-stack">{experience.map((job,index) => {
        const detail = details[index];
        return <article id={detail.id} className="content-panel experience-detail" key={job.company}>
          <p className="section-kicker section-kicker--purple">{job.period} · {job.location}</p>
          <h2>{job.company}</h2><h3>{job.role}</h3><p>{job.summary}</p>
          <div className="tag-row">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <section className="experience-detail__section"><h3>Work context: {detail.context}</h3><p>{detail.description}</p></section>
          <section className="experience-detail__section"><h3>Responsibilities and contributions</h3><div className="content-grid">{detail.contributions.map(([title,text]) => <div key={title}><h4>{title}</h4><p>{text}</p></div>)}</div></section>
          <div className="content-grid">
            <section><h3>Technical challenges</h3><p className="content-placeholder">{detail.challenges}</p></section>
            <section><h3>Outcomes and impact</h3><p className="content-placeholder">{detail.outcomes}</p></section>
          </div>
          <section className="experience-detail__section"><h3>What I learned</h3><p className="content-placeholder">{detail.reflection}</p></section>
        </article>;
      })}</div>
      <section className="content-panel content-panel--spaced"><h2>Experience across the stack</h2><p>These roles span embedded software and verification at Fresenius Medical Care and software delivery across microservices at Charles River Development. My project work complements that experience with digital hardware, robotics, and analog circuit design.</p><Link href="/projects" className="text-link text-link--light">Explore projects →</Link></section>
    </div></main>
    <footer className="footer"><div className="page-shell footer__inner"><p>© 2026 Justin Ho</p><Link href="/contact">Get in touch →</Link></div></footer>
  </>;
}

