import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

describe('ProjectCard', () => {
  it('exibe link de repositório válido e abre detalhes', async () => {
    const user = userEvent.setup();
    const onOpen = vi.fn();
    const project = projects[0];
    expect(project).toBeDefined();
    if (!project) return;

    render(<ProjectCard project={project} onOpen={onOpen} />);
    expect(screen.getByRole('link', { name: /código de centro pokémon/i })).toHaveAttribute(
      'href',
      project.repositoryUrl,
    );
    await user.click(screen.getByRole('button', { name: /detalhes/i }));
    expect(onOpen).toHaveBeenCalledWith(project);
  });

  it('informa quando o repositório é privado em vez de criar link falso', () => {
    const project = projects.find((item) => item.status === 'Privado');
    expect(project).toBeDefined();
    if (!project) return;

    render(<ProjectCard project={project} onOpen={vi.fn()} />);
    expect(screen.getByText(/repositório privado/i)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /código de/i })).not.toBeInTheDocument();
  });
});
