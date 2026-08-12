import type { Certification, Education } from '@/types/portfolio';

export const education: Education[] = [
  {
    id: 'engenharia-software',
    course: 'Bacharelado em Engenharia de Software',
    institution: 'Unicesumar',
    period: '2023 — 2027',
    status: 'Cursando',
  },
  {
    id: 'ads',
    course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'Instituto Federal do Acre — IFAC',
    period: '2023 — 2025',
    status: 'Concluído',
  },
  {
    id: 'tecnico-administracao',
    course: 'Técnico em Administração',
    institution: 'Instituto Federal do Acre — IFAC',
    period: '2023 — 2024',
    status: 'Concluído',
  },
  {
    id: 'tecnico-informatica',
    course: 'Técnico em Informática',
    institution: 'Instituto Federal do Acre — IFAC',
    period: '2020 — 2022',
    status: 'Concluído',
  },
];

export const certifications: Certification[] = [
  { name: 'Desenvolvimento Web Completo', issuer: 'Udemy', period: '2025 — 2026', workload: '120h' },
  { name: 'Clube Full Stack', issuer: 'Udemy', period: '2025 — 2026', workload: '113h' },
  { name: 'Introdução ao Desenvolvimento Web', issuer: 'UFAC', period: '2024 — 2025', workload: '120h' },
  { name: 'Front-end do Zero', issuer: 'DIO', period: '2024', workload: '75h' },
  { name: 'Linux para Iniciantes', issuer: 'DIO', period: '2024', workload: '30h' },
  { name: 'Algoritmos e Lógica', issuer: 'Udemy', period: '2023', workload: '30h' },
];
