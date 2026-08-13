import { ArrowUpRight, Check, ExternalLink, GitFork, LockKeyhole, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '@/types/portfolio';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.classList.add('modal-open');
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
      previousFocus?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={`project-modal${project.primary ? ' project-modal--primary' : ''}`}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <button
          ref={closeRef}
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar detalhes do projeto"
        >
          <X aria-hidden="true" />
        </button>
        <div className="modal-image">
          <img src={project.image} alt={project.imageAlt} />
        </div>
        <div className="modal-content">
          <div className="project-categories">
            {project.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
            <span>{project.status}</span>
          </div>
          <h2 id="project-modal-title">{project.title}</h2>
          <p id="project-modal-description">{project.description}</p>

          {project.highlights?.length ? (
            <div className="modal-section">
              <h3>Principais funcionalidades</h3>
              <ul>
                {project.highlights.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="modal-section">
            <h3>Tecnologias</h3>
            <div className="tag-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            {project.repositoryUrl ? (
              <a
                className="button button--primary"
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitFork aria-hidden="true" /> Ver código <ArrowUpRight aria-hidden="true" />
              </a>
            ) : (
              <span className="unavailable">
                <LockKeyhole aria-hidden="true" /> Repositório privado
              </span>
            )}
            {project.demoUrl ? (
              <a
                className="button button--secondary"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink aria-hidden="true" /> Abrir demonstração
              </a>
            ) : (
              <span className="unavailable">Demo indisponível</span>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
