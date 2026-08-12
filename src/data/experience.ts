import type { Experience } from '@/types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'espaco-4-ifac',
    role: 'Monitor de Tecnologia',
    organization: 'Espaço 4.0 — IFAC',
    period: '2023 — atual',
    description:
      'Apoio a projetos tecnológicos educacionais, suporte técnico e capacitação de estudantes.',
    highlights: [
      'Desenvolvimento e apoio em projetos de tecnologia e inovação.',
      'Atuação com modelagem 3D, Arduino e robótica.',
      'Suporte técnico e orientação de estudantes.',
    ],
    technologies: ['Arduino', 'Modelagem 3D', 'Robótica'],
  },
  {
    id: 'centro-estudo-sena',
    role: 'Professor de Informática',
    organization: 'Centro de Estudo Sena',
    period: '2023',
    description: 'Ensino de informática do nível básico ao avançado com atividades práticas.',
    highlights: [
      'Aulas de ferramentas digitais e informática aplicada.',
      'Introdução à lógica e ao raciocínio computacional.',
    ],
  },
  {
    id: 'monitor-logica-ifac',
    role: 'Monitor de Lógica de Programação',
    organization: 'Instituto Federal do Acre — IFAC',
    period: '2022',
    description: 'Orientação de estudantes em algoritmos, lógica e fundamentos de programação.',
    highlights: [
      'Acompanhamento de atividades em diferentes níveis de aprendizagem.',
      'Apoio ao desenvolvimento de habilidades analíticas e computacionais.',
    ],
    technologies: ['Algoritmos', 'Lógica de programação'],
  },
];
