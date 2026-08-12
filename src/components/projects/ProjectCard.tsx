import { ArrowUpRight, Eye, GitFork, LockKeyhole, Star } from 'lucide-react';
import type { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.imageAlt} loading="lazy" width="960" height="560" />
        <div className="project-badges">
          {project.featured ? (
            <span>
              <Star aria-hidden="true" /> Destaque
            </span>
          ) : null}
          <span>{project.status}</span>
        </div>
      </div>

      <div className="project-body">
        <div className="project-categories">
          {project.categories.slice(0, 2).map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tag-list">
          {project.technologies.slice(0, 5).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-actions">
          <button
            type="button"
            className="button button--small button--primary"
            onClick={() => onOpen(project)}
          >
            <Eye aria-hidden="true" /> Detalhes
          </button>
          {project.repositoryUrl ? (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Código de ${project.title} no GitHub`}
            >
              <GitFork aria-hidden="true" /> Código <ArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span className="unavailable">
              <LockKeyhole aria-hidden="true" /> Repositório privado
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
