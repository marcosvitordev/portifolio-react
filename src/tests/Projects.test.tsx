import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Projects from '@/components/sections/Projects';

describe('Projects', () => {
  it('apresenta o Gestão Médica Municipal como projeto principal', () => {
    render(<Projects />);

    expect(screen.getByText(/projeto principal · produto real/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /gestão médica municipal/i })).toBeInTheDocument();
    expect(screen.getByText(/prontuário e contrarreferência/i)).toBeInTheDocument();
    expect(screen.getByText(/operação itinerante offline/i)).toBeInTheDocument();
  });

  it('filtra por categoria e busca por tecnologia sem recarregar', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    expect(screen.getAllByRole('article').length).toBeGreaterThan(1);
    await user.click(screen.getByRole('button', { name: 'Mobile' }));
    expect(screen.getByRole('heading', { name: /jogo da memória/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /centro pokémon/i })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /limpar/i }));
    await user.type(screen.getByRole('searchbox', { name: /buscar projetos/i }), 'PostgreSQL');
    expect(screen.getByText(/2 projetos encontrados/i)).toBeInTheDocument();
  });

  it('abre e fecha o modal por botão e tecla Escape', async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const firstCard = screen.getAllByRole('article')[0];
    expect(firstCard).toBeDefined();
    if (!firstCard) return;
    await user.click(
      within(firstCard).getByRole('button', { name: /conhecer o projeto|detalhes/i }),
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
