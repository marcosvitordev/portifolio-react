import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/components/contact/ContactForm';
import { sendContactEmail } from '@/services/email';

vi.mock('@/services/email', () => ({ sendContactEmail: vi.fn() }));

describe('ContactForm', () => {
  beforeEach(() => vi.mocked(sendContactEmail).mockReset());

  it('mostra erros acessíveis para campos inválidos', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole('button', { name: /enviar mensagem/i }));

    expect(screen.getByLabelText('Nome')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText(/pelo menos 2 caracteres/i)).toBeInTheDocument();
    expect(screen.getByText(/e-mail válido/i)).toBeInTheDocument();
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it('envia dados válidos e apresenta confirmação', async () => {
    vi.mocked(sendContactEmail).mockResolvedValue(undefined);
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText('Nome'), 'Marina Souza');
    await user.type(screen.getByLabelText('E-mail'), 'marina@example.com');
    await user.type(screen.getByLabelText('Mensagem'), 'Quero conversar sobre uma aplicação web.');
    await user.click(screen.getByRole('button', { name: /enviar mensagem/i }));

    expect(sendContactEmail).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'Marina Souza', email: 'marina@example.com' }),
    );
    expect(await screen.findByText(/mensagem enviada/i)).toBeInTheDocument();
  });
});
