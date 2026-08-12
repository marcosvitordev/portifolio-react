import type { Contact, SocialLink } from '@/types/portfolio';

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/marcosvitordev', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcosvitor0/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/marcosvitor_0/', icon: 'instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/@marcosvitor_0', icon: 'youtube' },
];

export const contactChannels: Contact[] = [
  {
    label: 'E-mail',
    value: 'marcosvitor.dev@gmail.com',
    href: 'mailto:marcosvitor.dev@gmail.com',
    icon: 'mail',
  },
  {
    label: 'WhatsApp',
    value: '+55 68 99998-1509',
    href: 'https://wa.me/5568999981509?text=Olá%2C%20Marcos!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.',
    icon: 'message-circle',
  },
  {
    label: 'Telegram',
    value: '@marcosvitor_0',
    href: 'https://t.me/marcosvitor_0',
    icon: 'send',
  },
];
