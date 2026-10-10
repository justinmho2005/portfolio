import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-item">
      <div className="project-card__label"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.category}</span></div>
      <Link href={`/projects/${project.slug}`} className="project-card__visual" aria-label={`View ${project.title}`}>
        <Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) 90vw, (max-width: 1100px) 45vw, 30vw" className="project-card__image" />
      </Link>
      <div className="project-item__info">
        <h3>{project.title}</h3><p>{project.summary}</p>
        <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <Link className="project-card__link" href={`/projects/${project.slug}`} aria-label={`View project: ${project.title}`}>View Project <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}

