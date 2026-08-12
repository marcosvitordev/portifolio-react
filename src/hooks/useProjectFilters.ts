import { useMemo, useState } from 'react';
import type { Project, ProjectCategory } from '@/types/portfolio';

export type ProjectCategoryFilter = 'Todos' | ProjectCategory;
export type ProjectSort = 'featured' | 'title';

export function useProjectFilters(projects: Project[]) {
  const [category, setCategory] = useState<ProjectCategoryFilter>('Todos');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<ProjectSort>('featured');

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR');

    return projects
      .filter((project) => category === 'Todos' || project.categories.includes(category))
      .filter((project) => {
        if (!normalizedQuery) return true;
        const searchable = [project.title, project.summary, ...project.technologies]
          .join(' ')
          .toLocaleLowerCase('pt-BR');
        return searchable.includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (sort === 'title') return a.title.localeCompare(b.title, 'pt-BR');
        return Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title, 'pt-BR');
      });
  }, [category, projects, query, sort]);

  const clearFilters = () => {
    setCategory('Todos');
    setQuery('');
  };

  return {
    category,
    clearFilters,
    filteredProjects,
    query,
    setCategory,
    setQuery,
    setSort,
    sort,
  };
}
