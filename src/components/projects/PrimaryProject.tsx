import {
  ArrowRight,
  CalendarDays,
  ClipboardPlus,
  FileCheck2,
  LockKeyhole,
  MapPinned,
} from 'lucide-react';
import type { Project } from '@/types/portfolio';

interface PrimaryProjectProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const projectFlow = [
  'Regulação municipal',
  'Atendimento',
  'Prontuário integrado',
  'Retorno ao município',
];

const projectPillars = [
  { icon: CalendarDays, label: 'Regulação e agenda' },
  { icon: ClipboardPlus, label: 'Prontuário e contrarreferência' },
  { icon: MapPinned, label: 'Operação itinerante offline' },
  { icon: FileCheck2, label: 'Documentos, assinaturas e auditoria' },
];

export function PrimaryProject({ project, onOpen }: PrimaryProjectProps) {
  return (
    <article className="primary-project" aria-labelledby="primary-project-title">
      <div className="primary-project-preview">
        <img src={project.image} alt={project.imageAlt} width="1920" height="922" loading="lazy" />
        <span>Interface real do produto</span>
      </div>

      <div className="primary-project-content">
        <div className="primary-project-heading">
          <div>
            <span className="eyebrow">Projeto principal · Produto real</span>
            <h3 id="primary-project-title">{project.title}</h3>
          </div>
          <span className="primary-project-status">
            <LockKeyhole aria-hidden="true" /> Projeto privado
          </span>
        </div>

        <p className="primary-project-lead">{project.summary}</p>
        <p className="primary-project-description">{project.description}</p>

        <ol className="primary-project-flow" aria-label="Fluxo assistencial integrado">
          {projectFlow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>

        <div className="primary-project-pillars">
          {projectPillars.map(({ icon: PillarIcon, label }) => (
            <span key={label}>
              <PillarIcon aria-hidden="true" /> {label}
            </span>
          ))}
        </div>

        <div className="primary-project-footer">
          <div className="tag-list" aria-label="Tecnologias do projeto">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <button type="button" className="button button--primary" onClick={() => onOpen(project)}>
            Conhecer o projeto <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
