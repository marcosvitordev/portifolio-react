import type { Skill } from '@/types/portfolio';

export const skillCategories = [
  'Todos',
  'Front-end',
  'Back-end',
  'Banco de Dados',
  'Linguagens',
  'Ferramentas',
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export const skills: Skill[] = [
  {
    name: 'React',
    category: 'Front-end',
    icon: 'react',
    description: 'Interfaces componentizadas e responsivas.',
  },
  {
    name: 'Next.js',
    category: 'Front-end',
    icon: 'next',
    description: 'Aplicações React full stack e renderização híbrida.',
  },
  {
    name: 'HTML5',
    category: 'Front-end',
    icon: 'html',
    description: 'Marcação semântica e acessível.',
  },
  {
    name: 'CSS3',
    category: 'Front-end',
    icon: 'css',
    description: 'Layouts responsivos, animações e design systems.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Front-end',
    icon: 'tailwind',
    description: 'Composição rápida de interfaces consistentes.',
  },
  {
    name: 'Node.js',
    category: 'Back-end',
    icon: 'node',
    description: 'Serviços web e aplicações JavaScript no servidor.',
  },
  {
    name: 'NestJS',
    category: 'Back-end',
    icon: 'nest',
    description: 'APIs modulares com TypeScript.',
  },
  {
    name: 'Express.js',
    category: 'Back-end',
    icon: 'server',
    description: 'APIs REST e integrações web.',
  },
  {
    name: 'REST APIs',
    category: 'Back-end',
    icon: 'api',
    description: 'Contratos HTTP, autenticação e documentação.',
  },
  {
    name: 'Prisma ORM',
    category: 'Back-end',
    icon: 'database',
    description: 'Modelagem e acesso tipado a dados.',
  },
  {
    name: 'TypeORM',
    category: 'Back-end',
    icon: 'database',
    description: 'Persistência e modelagem de entidades.',
  },
  {
    name: 'PostgreSQL',
    category: 'Banco de Dados',
    icon: 'postgres',
    description: 'Bancos relacionais para aplicações web.',
  },
  {
    name: 'MySQL',
    category: 'Banco de Dados',
    icon: 'mysql',
    description: 'Modelagem, consultas e persistência relacional.',
  },
  {
    name: 'SQLite',
    category: 'Banco de Dados',
    icon: 'sqlite',
    description: 'Persistência local e projetos compactos.',
  },
  {
    name: 'TypeScript',
    category: 'Linguagens',
    icon: 'typescript',
    description: 'JavaScript com tipos e contratos explícitos.',
  },
  {
    name: 'JavaScript',
    category: 'Linguagens',
    icon: 'javascript',
    description: 'Aplicações web modernas no cliente e servidor.',
  },
  {
    name: 'Python',
    category: 'Linguagens',
    icon: 'python',
    description: 'Automação, lógica e sistemas de gestão.',
  },
  {
    name: 'Java',
    category: 'Linguagens',
    icon: 'java',
    description: 'Fundamentos, orientação a objetos e Android.',
  },
  {
    name: 'PHP',
    category: 'Linguagens',
    icon: 'php',
    description: 'Aplicações web e sistemas administrativos.',
  },
  {
    name: 'Git',
    category: 'Ferramentas',
    icon: 'git',
    description: 'Versionamento e fluxos colaborativos.',
  },
  {
    name: 'Linux',
    category: 'Ferramentas',
    icon: 'terminal',
    description: 'Ambientes de desenvolvimento e operação.',
  },
  {
    name: 'Figma',
    category: 'Ferramentas',
    icon: 'figma',
    description: 'Prototipação e comunicação de interfaces.',
  },
  {
    name: 'Swagger',
    category: 'Ferramentas',
    icon: 'file-code',
    description: 'Documentação e exploração de APIs.',
  },
];
