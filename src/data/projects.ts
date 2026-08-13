import portfolioImage from '@/assets/imgProjetos/projeto5.png';
import medicalImage from '@/assets/imgProjetos/projeto6.png';
import pokemonImage from '@/assets/imgProjetos/projeto7.png';
import medicationImage from '@/assets/imgProjetos/projeto8.png';
import membersImage from '@/assets/imgProjetos/projeto1.png';
import catalogImage from '@/assets/imgProjetos/projeto2.jpeg';
import memoryGameImage from '@/assets/imgProjetos/projeto3.png';
import managementImage from '@/assets/imgProjetos/projeto4.png';
import type { Project, ProjectCategory } from '@/types/portfolio';

export const projectCategories: Array<'Todos' | ProjectCategory> = [
  'Todos',
  'Full Stack',
  'Front-end',
  'Back-end',
  'Sistemas',
  'Acadêmicos',
  'Mobile',
];

export const projects: Project[] = [
  {
    id: 'gestao-medica',
    title: 'Gestão Médica Municipal',
    summary:
      'Plataforma de saúde municipal que conecta regulação, atendimento, prontuário integrado e retorno clínico em uma única jornada.',
    description:
      'O SGMM evoluiu de uma solução concentrada em cadastro e regulação para uma plataforma que acompanha toda a linha assistencial. O mesmo atendimento preserva os vínculos entre paciente, município, instituto, profissional, agenda, prontuário, documentos e conclusão clínica, incluindo operação itinerante em locais com conectividade limitada.',
    image: medicalImage,
    imageAlt: 'Dashboard institucional do Sistema de Gestão Médica Municipal',
    technologies: [
      'Next.js',
      'Node.js',
      'Express.js',
      'TypeScript',
      'Prisma ORM',
      'DigitalOcean Spaces',
    ],
    categories: ['Full Stack', 'Sistemas'],
    status: 'Privado',
    featured: true,
    primary: true,
    highlights: [
      'Regulação, autorização e agenda integradas',
      'Prontuário clínico e contrarreferência',
      'Documentos, PDFs e assinaturas',
      'Atendimento itinerante offline',
      'Sincronização segura sem duplicidade',
      'Relatórios, auditoria e governança',
    ],
  },
  {
    id: 'centro-pokemon',
    title: 'Centro Pokémon — Sistema de Gestão',
    summary: 'Pokédex full stack com autenticação, CRUD, paginação e filtros dinâmicos.',
    description:
      'Solução para treinadores autenticados gerenciarem uma Pokédex global. O back-end utiliza NestJS, PostgreSQL, TypeORM, JWT e Swagger; a interface em Next.js aplica filtros, perfil gamificado e um design baseado em protótipo Figma.',
    image: pokemonImage,
    imageAlt: 'Dashboard do Centro Pokémon com indicadores e filtros da Pokédex',
    technologies: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'TypeORM',
      'Tailwind CSS',
      'JWT',
    ],
    categories: ['Full Stack', 'Sistemas'],
    repositoryUrl: 'https://github.com/marcosvitordev/pokemon-management-system',
    status: 'Concluído',
    featured: true,
    highlights: [
      'Autenticação JWT',
      'CRUD completo',
      'Paginação',
      'Documentação Swagger',
      'Filtros por espécie',
    ],
  },
  {
    id: 'medication-scheduler',
    title: 'Medication Scheduler System',
    summary: 'Aprazamento de medicamentos guiado pela rotina do paciente e regras clínicas.',
    description:
      'Sistema full stack que gera calendários posológicos, calcula intervalos e previne conflitos com jejum e refeições. A API inclui autenticação, auditoria e controle de sessão; o front-end oferece um workspace operacional.',
    image: medicationImage,
    imageAlt: 'Dashboard do Sistema AT com pacientes, rotinas, prescrições e calendário',
    technologies: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'TypeORM',
      'Tailwind CSS',
      'JWT',
    ],
    categories: ['Full Stack', 'Sistemas'],
    repositoryUrl: 'https://github.com/marcosvitordev/medication-scheduler-system',
    status: 'Em evolução',
    featured: true,
    highlights: [
      'Motor de aprazamento',
      'Calendário posológico',
      'Auditoria',
      'Controle de sessão',
    ],
  },
  {
    id: 'gestao-socios',
    title: 'Sistema de Sócios',
    summary: 'Gestão de associados com carteirinhas em PDF e validação por QR Code.',
    description:
      'Plataforma para sindicatos e associações organizarem cadastros, emitirem documentos de identificação e validarem carteirinhas online.',
    image: membersImage,
    imageAlt: 'Tela do sistema de gestão de sócios',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    categories: ['Full Stack', 'Sistemas'],
    status: 'Privado',
    featured: false,
    highlights: ['Geração de PDF', 'QR Code', 'Validação online'],
  },
  {
    id: 'catalogo-produtos',
    title: 'Catálogo de Produtos Web',
    summary: 'Projeto acadêmico de catálogo com CRUD de produtos e banco relacional.',
    description:
      'Projeto final da WebAcademy EAD, realizada em parceria com UFAC, Motorola, Flextronics e Fundape, com back-end Node.js/Express, MySQL e interface Alpine.js.',
    image: catalogImage,
    imageAlt: 'Interface do catálogo de produtos desenvolvido na WebAcademy',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'JavaScript', 'Alpine.js', 'Scrum'],
    categories: ['Full Stack', 'Acadêmicos'],
    repositoryUrl: 'https://github.com/webacademyufac/hands-on-ead-moto-g',
    status: 'Concluído',
    featured: false,
    highlights: ['CRUD de produtos', 'Banco MySQL', 'Trabalho em equipe com Scrum'],
  },
  {
    id: 'jogo-memoria-2022',
    title: 'Jogo da Memória — Copa 2022',
    summary: 'Aplicativo Android criado em equipe para exercitar lógica e interfaces mobile.',
    description:
      'Jogo da memória temático desenvolvido em Java e Android Studio, com manipulação de componentes visuais, eventos e lógica de correspondência de cartas.',
    image: memoryGameImage,
    imageAlt: 'Tela do jogo da memória com tema da Copa do Mundo de 2022',
    technologies: ['Java', 'Android Studio', 'XML'],
    categories: ['Mobile', 'Acadêmicos'],
    repositoryUrl: 'https://github.com/Solar-Software-Laboratory/Qatar-2022-Jogo-da-Memoria',
    status: 'Concluído',
    year: 2022,
    featured: false,
    highlights: ['Lógica de jogo', 'Interface Android', 'Desenvolvimento em equipe'],
  },
  {
    id: 'gestao-python',
    title: 'Sistema de Gestão em Python',
    summary: 'CRUD modular para controle de registros com persistência em SQLite.',
    description:
      'Projeto de aprendizagem focado em operações de cadastro, edição, exclusão e consulta, integrando Python e banco de dados local.',
    image: managementImage,
    imageAlt: 'Interface do sistema de gestão desenvolvido em Python',
    technologies: ['Python', 'SQLite'],
    categories: ['Back-end', 'Sistemas', 'Acadêmicos'],
    repositoryUrl: 'https://github.com/marcosvitordev/Sistema_de_gestao_python',
    status: 'Concluído',
    featured: false,
    highlights: ['CRUD', 'Persistência SQLite', 'Organização modular'],
  },
  {
    id: 'portfolio-react',
    title: 'Portfólio Pessoal',
    summary: 'Experiência web responsiva para apresentar trajetória, tecnologias e projetos.',
    description:
      'Este portfólio reúne projetos, formação e canais de contato em uma interface acessível, responsiva e preparada para temas claro e escuro.',
    image: portfolioImage,
    imageAlt: 'Versão anterior do portfólio pessoal de Marcos Vitor',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS', 'EmailJS'],
    categories: ['Front-end'],
    repositoryUrl: 'https://github.com/marcosvitordev/portifolio-react',
    demoUrl: 'https://marcosvitordev.netlify.app/',
    status: 'Em evolução',
    featured: true,
    highlights: ['Design responsivo', 'Acessibilidade', 'SEO', 'Formulário com EmailJS'],
  },
];
