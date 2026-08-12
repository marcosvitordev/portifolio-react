import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '@/components/layout/Header';

describe('Header', () => {
  beforeEach(() => localStorage.clear());

  it('renderiza a navegação principal e controla o menu móvel', async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(screen.getByRole('navigation', { name: /navegação principal/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projetos' })).toHaveAttribute('href', '#projects');

    const toggle = screen.getByRole('button', { name: /abrir menu/i });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await user.click(screen.getByRole('link', { name: 'Contato' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('persiste a preferência quando o tema é alternado', async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole('button', { name: /ativar tema claro/i }));
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(localStorage.getItem('marcos-portfolio-theme')).toBe('light');
  });
});
