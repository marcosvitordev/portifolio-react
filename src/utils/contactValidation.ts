import type { ContactFormErrors, ContactFormValues } from '@/types/portfolio';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2) errors.name = 'Informe seu nome com pelo menos 2 caracteres.';
  if (name.length > 80) errors.name = 'Use no máximo 80 caracteres.';

  if (!EMAIL_PATTERN.test(email)) errors.email = 'Informe um e-mail válido.';
  if (email.length > 120) errors.email = 'Use no máximo 120 caracteres.';

  if (message.length < 10) errors.message = 'Escreva uma mensagem com pelo menos 10 caracteres.';
  if (message.length > 1500) errors.message = 'Use no máximo 1.500 caracteres.';

  return errors;
}
