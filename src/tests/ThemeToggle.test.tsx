import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from '@/components/common/ThemeToggle';

describe('ThemeToggle', () => {
  it('descreve e aciona a troca para o próximo tema', async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();
    render(<ThemeToggle theme="dark" onToggle={onToggle} />);

    const button = screen.getByRole('button', { name: /ativar tema claro/i });
    await user.click(button);

    expect(onToggle).toHaveBeenCalledOnce();
  });
});
