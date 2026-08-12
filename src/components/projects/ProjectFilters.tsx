import { Search, SlidersHorizontal, X } from 'lucide-react';
import { projectCategories } from '@/data/projects';
import type { ProjectCategoryFilter, ProjectSort } from '@/hooks/useProjectFilters';

interface ProjectFiltersProps {
  category: ProjectCategoryFilter;
  query: string;
  resultCount: number;
  sort: ProjectSort;
  onCategoryChange: (category: ProjectCategoryFilter) => void;
  onClear: () => void;
  onQueryChange: (query: string) => void;
  onSortChange: (sort: ProjectSort) => void;
}

export function ProjectFilters({
  category,
  query,
  resultCount,
  sort,
  onCategoryChange,
  onClear,
  onQueryChange,
  onSortChange,
}: ProjectFiltersProps) {
  const hasFilters = category !== 'Todos' || query.length > 0;

  return (
    <div className="project-filters">
      <div className="search-field">
        <Search aria-hidden="true" />
        <label className="sr-only" htmlFor="project-search">
          Buscar projetos
        </label>
        <input
          id="project-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Buscar por projeto ou tecnologia"
          autoComplete="off"
        />
      </div>

      <div className="filter-row" role="group" aria-label="Filtrar projetos por categoria">
        {projectCategories.map((item) => (
          <button
            type="button"
            key={item}
            className={category === item ? 'is-active' : undefined}
            aria-pressed={category === item}
            onClick={() => onCategoryChange(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="filter-meta">
        <span>
          {resultCount} {resultCount === 1 ? 'projeto encontrado' : 'projetos encontrados'}
        </span>
        <label>
          <SlidersHorizontal aria-hidden="true" />
          <span className="sr-only">Ordenar projetos</span>
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value as ProjectSort)}
          >
            <option value="featured">Destaques primeiro</option>
            <option value="title">Ordem alfabética</option>
          </select>
        </label>
        {hasFilters ? (
          <button type="button" className="clear-button" onClick={onClear}>
            <X aria-hidden="true" /> Limpar
          </button>
        ) : null}
      </div>
    </div>
  );
}
