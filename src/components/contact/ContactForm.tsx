import { CheckCircle2, LoaderCircle, Send, TriangleAlert } from 'lucide-react';
import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { sendContactEmail } from '@/services/email';
import type { ContactFormErrors, ContactFormValues } from '@/types/portfolio';
import { validateContactForm } from '@/utils/contactValidation';

const initialValues: ContactFormValues = { name: '', email: '', message: '', company: '' };

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const lastSubmission = useRef(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as keyof ContactFormValues;
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'loading' || values.company) return;

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) {
      setStatusMessage('Revise os campos indicados antes de enviar.');
      return;
    }

    if (Date.now() - lastSubmission.current < 15_000) {
      setStatus('error');
      setStatusMessage('Aguarde alguns segundos antes de tentar novamente.');
      return;
    }

    setStatus('loading');
    setStatusMessage('Enviando sua mensagem…');

    try {
      await sendContactEmail(values);
      lastSubmission.current = Date.now();
      setValues(initialValues);
      setStatus('success');
      setStatusMessage('Mensagem enviada. Obrigado pelo contato!');
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error instanceof Error && error.message.includes('não está configurado')
          ? 'O envio pelo site está indisponível. Use o e-mail ao lado para falar comigo.'
          : 'Não foi possível enviar agora. Tente novamente ou use o e-mail direto.',
      );
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-name">Nome</label>
          <input
            id="contact-name"
            name="name"
            value={values.name}
            onChange={handleChange}
            autoComplete="name"
            maxLength={80}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Como posso chamar você?"
          />
          {errors.name ? (
            <span className="field-error" id="name-error">
              {errors.name}
            </span>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor="contact-email">E-mail</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            maxLength={120}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="voce@exemplo.com"
          />
          {errors.email ? (
            <span className="field-error" id="email-error">
              {errors.email}
            </span>
          ) : null}
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-message">Mensagem</label>
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={6}
          maxLength={1500}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
          placeholder="Conte um pouco sobre o projeto, desafio ou oportunidade."
        />
        <div className="field-meta">
          <span id="message-hint">Mínimo de 10 caracteres</span>
          <span>{values.message.length}/1500</span>
        </div>
        {errors.message ? (
          <span className="field-error" id="message-error">
            {errors.message}
          </span>
        ) : null}
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contact-company">Empresa</label>
        <input
          id="contact-company"
          name="company"
          value={values.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-footer">
        <button className="button button--primary" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <LoaderCircle className="spin" aria-hidden="true" />
          ) : (
            <Send aria-hidden="true" />
          )}
          {status === 'loading' ? 'Enviando…' : 'Enviar mensagem'}
        </button>
        <p className={`form-status form-status--${status}`} role="status" aria-live="polite">
          {status === 'success' ? <CheckCircle2 aria-hidden="true" /> : null}
          {status === 'error' ? <TriangleAlert aria-hidden="true" /> : null}
          {statusMessage}
        </p>
      </div>
    </form>
  );
}
