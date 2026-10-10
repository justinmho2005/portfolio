import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import { experience } from "../../data/experience";

export const metadata: Metadata = { title: "Experience | Justin Ho", description: "Co-op experience in embedded software, verification, and distributed software systems." };

function Mark({ kind }: { kind: "chip" | "tools" | "chart" | "people" | "message" | "idea" }) {
  const paths = {
    chip: "M7 7h10v10H7z M3 8h4m-4 4h4m-4 4h4m10-8h4m-4 4h4m-4 4h4M8 3v4m4-4v4m4-4v4M8 17v4m4-4v4m4-4v4",
    tools: "M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1 M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
    chart: "M4 20V11h3v9m4 0V4h3v16m4 0v-6h3v6",
    people: "M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M3 20v-3a6 6 0 0 1 12 0v3 M17 5a3 3 0 0 1 0 6m1 3a5 5 0 0 1 3 5v1",
    message: "M3 4h18v13H9l-5 4v-4H3z M7 9h10M7 12h6",
    idea: "M9 17h6m-5 4h4 M8 14a6 6 0 1 1 8 0l-1 3H9z",
  };
  return <svg className="journey-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>;
}

const roles = [
  { id: "fresenius", year: "2026", context: "Embedded software & verification", outcome: "Work centers on maintainable software and scalable verification. Specific delivered milestones and results will be added here." },
  { id: "charles-river", year: "2025", context: "Distributed systems & software delivery", outcome: "Work supported reproducible environments and release reliability. Specific delivered milestones and results will be added here." },
];

export default function Page() {
  return <><SectionHeader active="Experience" /><main className="journey-page">
    <section className="journey-hero">
      <div className="page-shell"><p className="section-kicker">Experience</p><h1>Engineering in the <span>real world.</span></h1><p>Two co-op experiences connecting technical depth with practical engineering, teamwork, and systems that matter.</p><a href="#fresenius" className="journey-down" aria-label="Explore co-op experience">↓</a></div>
    </section>
    <div className="page-shell journey-roles">{experience.map((job, index) => {
      const role = roles[index];
      return <article id={role.id} key={role.id} className="journey-role">
        <div className="journey-overview">
          <figure className={`journey-photo journey-photo--${index}`}><Image src="/experience-office-v1.png" alt="" fill sizes="(max-width: 760px) 100vw, 460px" /><div className="journey-year"><strong>{role.year}</strong><span>Co-op</span></div><figcaption>Illustrative workplace image</figcaption></figure>
          <div className="journey-role-copy"><p className="section-kicker">0{index + 1} / Work experience</p><h2>{job.role}</h2><h3>{job.company}</h3><div className="journey-meta"><span>{job.location}</span><span>{job.period}</span></div><p>{job.summary}</p><div className="tag-row">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link text-link--light" href={`#${role.id}-focus`}>Explore the work ↓</a></div>
        </div>
        <div id={`${role.id}-focus`} className="journey-focus">
          <section><Mark kind="chip" /><div><h3>Key responsibilities</h3><ul>{job.focus.map(item => <li key={item}>{item}</li>)}</ul></div></section>
          <section><Mark kind="tools" /><div><h3>Technologies & focus</h3><p className="journey-context">{role.context}</p><div className="tag-row">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></section>
          <section><Mark kind="chart" /><div><h3>Impact & results</h3><p>{role.outcome}</p><span className="journey-pending">Detailed outcomes to add</span></div></section>
        </div>
      </article>;
    })}</div>
    <section className="journey-timeline-section"><div className="page-shell"><div className="journey-section-heading"><div><p className="section-kicker">03 / Timeline</p><h2>My professional journey.</h2><p>From software delivery to embedded verification.</p></div><p>Each experience adds a new perspective on how software is built, tested, and maintained in practice.</p></div><ol className="journey-timeline"><li><span className="journey-time">2025</span><div><h3>Charles River Development</h3><p>Software Engineer Co-op</p><span>Jan 2025 – Jun 2025</span></div></li><li><span className="journey-time">2026</span><div><h3>Fresenius Medical Care</h3><p>Embedded Software Engineering Co-op</p><span>Jul 2026 – Present</span></div></li><li className="journey-future"><span className="journey-time">Future</span><div><h3>What comes next</h3><p>New challenges. More systems to build.</p><Link href="/contact">Let’s connect →</Link></div></li></ol></div></section>
    <section className="journey-beyond"><div className="page-shell journey-beyond-grid"><div><p className="section-kicker">04 / Beyond work</p><h2>More than just technical skills.</h2><p>Engineering brings together people, ideas, and careful execution. These are the habits I want to keep developing alongside my technical work.</p><div className="journey-values">{[["people", "Teamwork", "Working across engineering teams."], ["message", "Communication", "Making ideas and findings clear."], ["idea", "Problem solving", "Breaking complex systems into practical steps."], ["chart", "Practical impact", "Connecting implementation with useful outcomes."]].map(([kind, title, copy]) => <div key={title}><Mark kind={kind as "people" | "message" | "idea" | "chart"} /><h3>{title}</h3><p>{copy}</p></div>)}</div></div><figure><Image src="/project-fpga-scene-v1.png" alt="Illustrative engineering workspace with a laptop and FPGA development board" width={1536} height={1024} sizes="(max-width: 900px) 100vw, 45vw" /><figcaption>Illustrative engineering workspace</figcaption></figure></div></section>
    <section className="journey-cta"><div className="page-shell"><div><p className="section-kicker">05 / Next step</p><h2>Let’s build what’s next.</h2><p>Interested in my experience or want to talk about engineering?</p></div><div className="hero__actions"><Link href="/contact" className="button button--primary">Get in touch →</Link><Link href="/projects" className="button button--secondary">Explore projects →</Link></div></div></section>
  </main><footer className="footer"><div className="page-shell footer__inner"><p>© 2026 Justin Ho</p><Link href="/#top">Back to Home ↑</Link></div></footer></>;
}
