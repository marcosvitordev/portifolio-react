import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectFilters } from '@/components/projects/ProjectFilters';

describe('ProjectFilters', () => {
  it('expõe estados acessíveis e encaminha as mudanças', async () => {
    const user = userEvent.setup();
    const onCategoryChange = vi.fn();
    const onQueryChange = vi.fn();
    const onSortChange = vi.fn();

    render(
      <ProjectFilters
        category="Todos"
        query=""
        resultCount={8}
        sort="featured"
        onCategoryChange={onCategoryChange}
        onClear={vi.fn()}
        onQueryChange={onQueryChange}
        onSortChange={onSortChange}
      />,
    );

    expect(screen.getByRole('button', { name: 'Todos' })).toHaveAttribute('aria-pressed', 'true');
    await user.click(screen.getByRole('button', { name: 'Full Stack' }));
    expect(onCategoryChange).toHaveBeenCalledWith('Full Stack');

    await user.type(screen.getByRole('searchbox'), 'React');
    expect(onQueryChange).toHaveBeenCalled();

    await user.selectOptions(screen.getByRole('combobox'), 'title');
    expect(onSortChange).toHaveBeenCalledWith('title');
  });
});
