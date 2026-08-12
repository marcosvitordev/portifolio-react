import emailjs from '@emailjs/browser';
import type { ContactFormValues } from '@/types/portfolio';

const getEmailConfig = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('O serviço de contato não está configurado neste ambiente.');
  }

  return { serviceId, templateId, publicKey };
};

export async function sendContactEmail(values: ContactFormValues) {
  const { serviceId, templateId, publicKey } = getEmailConfig();

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: values.name.trim(),
      reply_to: values.email.trim(),
      message: values.message.trim(),
    },
    { publicKey },
  );
}
