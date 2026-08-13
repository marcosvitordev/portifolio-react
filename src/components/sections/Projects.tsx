import { FolderSearch } from 'lucide-react';
import { useCallback, useState } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectFilters } from '@/components/projects/ProjectFilters';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { PrimaryProject } from '@/components/projects/PrimaryProject';
import { projects } from '@/data/projects';
import { useProjectFilters } from '@/hooks/useProjectFilters';
import type { Project } from '@/types/portfolio';

const primaryProject = projects.find((project) => project.primary);
const otherProjects = projects.filter((project) => !project.primary);

export default function Projects() {
  const filters = useProjectFilters(otherProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <section className="section section--muted" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Portfólio"
          title="Meus projetos"
          description="Produtos e aplicações que desenvolvi, com destaque para o sistema que reúne minha experiência mais completa em engenharia de software."
        />

        {primaryProject ? (
          <PrimaryProject project={primaryProject} onOpen={setSelectedProject} />
        ) : null}

        <div className="projects-secondary-heading">
          <span className="eyebrow">Outros trabalhos</span>
          <h3>Mais projetos</h3>
        </div>

        <ProjectFilters
          category={filters.category}
          query={filters.query}
          resultCount={filters.filteredProjects.length}
          sort={filters.sort}
          onCategoryChange={filters.setCategory}
          onClear={filters.clearFilters}
          onQueryChange={filters.setQuery}
          onSortChange={filters.setSort}
        />

        {filters.filteredProjects.length ? (
          <div className="projects-grid" aria-live="polite">
            {filters.filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </div>
        ) : (
          <div className="empty-state" role="status">
            <FolderSearch aria-hidden="true" />
            <h3>Nenhum projeto encontrado</h3>
            <p>Tente outro termo ou limpe os filtros ativos.</p>
            <button
              type="button"
              className="button button--secondary"
              onClick={filters.clearFilters}
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {selectedProject ? <ProjectModal project={selectedProject} onClose={closeModal} /> : null}
    </section>
  );
}
