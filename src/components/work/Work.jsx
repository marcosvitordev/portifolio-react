import React, { useState } from "react";
import "./work.css";

// Importando imagens dos projetos
import imgProjeto1 from "../../assets/imgProjetos/projeto1.png";
import imgProjeto2 from "../../assets/imgProjetos/projeto2.jpeg";
import imgProjeto3 from "../../assets/imgProjetos/projeto3.png";
import imgProjeto4 from "../../assets/imgProjetos/projeto4.png";
import imgProjeto5 from "../../assets/imgProjetos/projeto5.png";
import imgProjeto6 from "../../assets/imgProjetos/projeto6.png";
import imgProjeto7 from "../../assets/imgProjetos/projeto7.png";
import imgProjeto8 from "../../assets/imgProjetos/projeto8.png";

const projetos = [
  {
    numero: "01",
    titulo: "Centro Pokémon - Sistema de Gestão",
    descricao:
      "Solução Fullstack para gestão de Pokémons, permitindo que treinadores autenticados operem um CRUD completo em uma Pokédex global. O backend foi desenvolvido em NestJS com PostgreSQL, contando com autenticação JWT, paginação e integração Swagger. O frontend em Next.js possui interface moderna (Tailwind CSS, Glassmorphism) baseada em protótipo Figma, com gestão de perfil gamificada e filtros dinâmicos.",
    techs:
      "Node.js, NestJS, PostgreSQL, TypeORM, React, Next.js, TypeScript, Tailwind CSS",
    github: "https://github.com/marcosvitordev/pokemon-management-system.git",
    demo: "#",
    imagem: imgProjeto7,
  },
  {
    numero: "02",
    titulo: "Medication Scheduler System (Sistema AT)",
    descricao:
      "Sistema fullstack para aprazamento de medicamentos orientado pela rotina do paciente e regras clínicas. Gera calendários posológicos seguros, calculando intervalos e prevenindo conflitos (jejum, refeições). Conta com API em NestJS e PostgreSQL, incluindo motor de prescrição, autenticação JWT avançada com auditoria e controle de sessão, além de um workspace operacional no frontend utilizando Next.js.",
    techs:
      "Node.js, NestJS, PostgreSQL, TypeORM, React, Next.js, TypeScript, Tailwind CSS, JWT",
    github: "https://github.com/marcosvitordev/medication-scheduler-system.git",
    demo: "#",
    imagem: imgProjeto8,
  },
  {
    numero: "03",
    titulo: "Sistema de Gestão Médica Municipal (SaaS)",
    descricao:
      "Plataforma web para gerenciar e integrar procedimentos médicos especializados entre municípios, institutos de saúde e profissionais, oferecendo um fluxo digital seguro, organizado e transparente, com dashboards específicos por perfil e armazenamento em nuvem.",
    techs:
      "Node.js, Next.js, Express.js (API REST), DigitalOcean Spaces (Bucket Storage), TypeScript, Prisma ORM",
    github: "https://github.com/seu-usuario/seu-repositorio",
    demo: "https://seusistema.vercel.app",
    imagem: imgProjeto6,
  },
  {
    numero: "04",
    titulo: "Sistema de Sócios (SaaS)",
    descricao:
      "Sistema SaaS focado na gestão de sócios para sindicatos e associações de pesca. Permite o cadastro completo de associados e gera carteirinhas personalizadas em PDF com QR Code para autenticação e validação online. Ideal para uso em entidades que precisam organizar e emitir documentos de identificação de forma prática e segura.",
    techs: "PHP, MySQL, HTML, CSS, JavaScript",
    github: "https://github.com/seu-usuario/seu-repositorio",
    demo: "https://seusistema.vercel.app",
    imagem: imgProjeto1,
  },
  {
    numero: "05",
    titulo: "Catálogo de Produtos Web",
    descricao:
      "Projeto final do curso 'Introdução ao Desenvolvimento de Software Web' da WebAcademy EAD, realizado em parceria com UFAC, Motorola, Flextronics e Fundape. Desenvolvemos um catálogo de produtos com foco no back-end em Node.js e Express, utilizando MySQL como banco de dados. No front-end, aplicamos Alpine.js para garantir interatividade e responsividade. O sistema permite cadastro, edição e listagem de produtos de forma simples e funcional.",
    techs:
      "Node.js, Express.js, MySQL, JavaScript, Alpine.js, HTML, CSS, Scrum",
    github: "https://github.com/webacademyufac/hands-on-ead-moto-g",
    demo: "#",
    imagem: imgProjeto2,
  },
  {
    numero: "06",
    titulo: "Jogo da Memória – Copa do Mundo 2022",
    descricao:
      "Desenvolvido em equipe durante projeto mobile, este jogo da memória foi criado em Java utilizando Android Studio. Com o tema da Copa do Mundo 2022, o jogo desafia os usuários a encontrar pares de cartas com imagens icônicas de jogadores. A proposta foi aplicar conceitos de desenvolvimento Android, manipulação de componentes visuais e lógica de jogo, reforçando também o trabalho em equipe.",
    techs: "Java, Android Studio, XML, Desenvolvimento Mobile",
    github:
      "https://github.com/Solar-Software-Laboratory/Qatar-2022-Jogo-da-Memoria",
    demo: "#",
    imagem: imgProjeto3,
  },
  {
    numero: "07",
    titulo: "Sistema de Gestão",
    descricao:
      "Sistema de gestão desenvolvido em Python com banco de dados SQLite, ideal para controle de dados de pequenas empresas ou instituições. O sistema permite cadastro, edição, exclusão e consulta de registros de forma simples e eficiente, utilizando interfaces interativas no terminal ou GUI. Projeto voltado ao aprendizado prático de CRUD, integração com banco de dados e organização de código modular.",
    techs: "Python, SQLite, CRUD, Interface CLI/GUI",
    github: "https://github.com/marcosvitordev/Sistema_de_gestao_python",
    demo: "#",
    imagem: imgProjeto4,
  },
  {
    numero: "08",
    titulo: "Portfólio Pessoal em React",
    descricao:
      "Portfólio moderno e responsivo desenvolvido em React, com HTML, CSS e JavaScript. Utiliza a biblioteca EmailJS para envio de mensagens diretamente pelo formulário de contato, sem necessidade de back-end. O projeto apresenta meus principais trabalhos, tecnologias dominadas e formas de contato, com foco em performance, acessibilidade e design limpo.",
    techs: "React.js, HTML, CSS, JavaScript, EmailJS",
    github: "https://github.com/marcosvitordev/portifolio-react",
    demo: "https://marcosvitordev.netlify.app/",
    imagem: imgProjeto5,
  },
];

const Work = () => {
  const [atual, setAtual] = useState(0);
  const [animando, setAnimando] = useState(false);

  const mudarProjeto = (index) => {
    if (index === atual || animando) return;

    setAnimando(true);
    setTimeout(() => {
      setAtual(index);
      setAnimando(false);
    }, 300);
  };

  const proximo = () => mudarProjeto((atual + 1) % projetos.length);
  const anterior = () =>
    mudarProjeto((atual - 1 + projetos.length) % projetos.length);

  const projeto = projetos[atual];
  const tecnologias = projeto.techs
    .split(",")
    .map((tech) => tech.trim())
    .filter(Boolean);
  const progresso = `${((atual + 1) / projetos.length) * 100}%`;
  const temDemo = projeto.demo && projeto.demo !== "#";

  return (
    <section className="work section" id="projects">
      <h2 className="section__title">Projetos</h2>
      <span className="section__subtitle">Meus Projetos</span>

      <div className="work__container container">
        <div className={`work__showcase ${animando ? "fade-out" : "fade-in"}`}>
          <div className="work__media">
            <div className="work__img-wrapper">
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="work__img"
              />
            </div>

            <div className="work__media-footer">
              <div className="work__counter">
                <span>Projeto em destaque</span>
                <strong>
                  {projeto.numero}/{String(projetos.length).padStart(2, "0")}
                </strong>
              </div>

              <div className="work__progress" aria-hidden="true">
                <span style={{ width: progresso }}></span>
              </div>
            </div>
          </div>

          <div className="work__data">
            <div className="work__eyebrow">
              <span className="work__number">{projeto.numero}</span>
              <span>Projeto selecionado</span>
            </div>

            <h3 className="work__title">{projeto.titulo}</h3>

            <p className="work__description">{projeto.descricao}</p>

            <div className="work__techs" aria-label="Tecnologias usadas">
              {tecnologias.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="work__buttons">
              {temDemo ? (
                <a
                  className="work__button work__button--primary"
                  href={projeto.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="uil uil-external-link-alt"></i>
                  Ver Projeto
                </a>
              ) : (
                <span
                  className="work__button work__button--disabled"
                  aria-disabled="true"
                >
                  <i className="uil uil-eye-slash"></i>
                  Demo indisponível
                </span>
              )}

              <a
                className="work__button work__button--ghost"
                href={projeto.github}
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-github"></i>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="work__footer">
          <div className="work__thumbs" aria-label="Selecionar projeto">
            {projetos.map((item, index) => (
              <button
                className={`work__thumb ${index === atual ? "is-active" : ""}`}
                key={item.numero}
                onClick={() => mudarProjeto(index)}
                aria-label={`Ver projeto ${item.numero}: ${item.titulo}`}
                aria-current={index === atual ? "true" : undefined}
              >
                <img src={item.imagem} alt="" aria-hidden="true" />
                <span>{item.numero}</span>
              </button>
            ))}
          </div>

          <div className="work__nav">
            <button onClick={anterior} aria-label="Projeto anterior">
              <i className="uil uil-angle-left"></i>
            </button>
            <button onClick={proximo} aria-label="Próximo projeto">
              <i className="uil uil-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
