import React, { useState } from 'react';
import './work.css';
// Importando imagens dos projetos
import imgProjeto1 from '../../assets/imgProjetos/projeto1.png';
import imgProjeto2 from '../../assets/imgProjetos/projeto2.jpeg';
import imgProjeto3 from '../../assets/imgProjetos/projeto3.png';
import imgProjeto4 from '../../assets/imgProjetos/projeto4.png';
import imgProjeto5 from '../../assets/imgProjetos/projeto5.png';

const projetos = [
    {
        numero: "01",
        titulo: "Sistema de Sócios (SaaS)",
        descricao: "Sistema SaaS focado na gestão de sócios para sindicatos e associações de pesca. Permite o cadastro completo de associados e gera carteirinhas personalizadas em PDF com QR Code para autenticação e validação online. Ideal para uso em entidades que precisam organizar e emitir documentos de identificação de forma prática e segura.",
        techs: "php, MySQL, HTML, CSS, JavaScript",
        github: "https://github.com/seu-usuario/seu-repositorio", // substitua com o link real
        demo: "https://seusistema.vercel.app", // substitua com o link real
        imagem: imgProjeto1
    },
    {
        numero: "02",
        titulo: "Catálogo de Produtos Web",
        descricao: "Projeto final do curso 'Introdução ao Desenvolvimento de Software Web' da WebAcademy EAD, realizado em parceria com UFAC, Motorola, Flextronics e Fundape. Desenvolvemos um catálogo de produtos com foco no back-end em Node.js e Express, utilizando MySQL como banco de dados. No front-end, aplicamos Alpine.js para garantir interatividade e responsividade. O sistema permite cadastro, edição e listagem de produtos de forma simples e funcional.",
        techs: "Node.js, Express.js, MySQL, JavaScript, Alpine.js, HTML, CSS, Scrum",
        github: "https://github.com/webacademyufac/hands-on-ead-moto-g", // substitua com o link real
        demo: "#", // substitua com o link real
        imagem: imgProjeto2

    },
    {
        numero: "03",
        titulo: "Jogo da Memória – Copa do Mundo 2022",
        descricao: "Desenvolvido em equipe durante projeto mobile, este jogo da memória foi criado em Java utilizando Android Studio. Com o tema da Copa do Mundo 2022, o jogo desafia os usuários a encontrar pares de cartas com imagens icônicas de jogadores. A proposta foi aplicar conceitos de desenvolvimento Android, manipulação de componentes visuais e lógica de jogo, reforçando também o trabalho em equipe.",
        techs: "Java, Android Studio, XML, Desenvolvimento Mobile",
        github: "https://github.com/Solar-Software-Laboratory/Qatar-2022-Jogo-da-Memoria", // substitua com o link real
        demo: "#", // se tiver um vídeo demonstrativo ou APK, pode colocar aqui
        imagem: imgProjeto3

    },
    {
        numero: "04",
        titulo: "Sistema de Gestão",
        descricao: "Sistema de gestão desenvolvido em Python com banco de dados SQLite, ideal para controle de dados de pequenas empresas ou instituições. O sistema permite cadastro, edição, exclusão e consulta de registros de forma simples e eficiente, utilizando interfaces interativas no terminal ou GUI. Projeto voltado ao aprendizado prático de CRUD, integração com banco de dados e organização de código modular.",
        techs: "Python, SQLite, CRUD, Interface CLI/GUI",
        github: "https://github.com/marcosvitordev/Sistema_de_gestao_python", // substitua com o link real
        demo: "#", // se tiver vídeo ou executável
        imagem: imgProjeto4

    },
    {
        numero: "05",
        titulo: "Portfólio Pessoal em React",
        descricao: "Portfólio moderno e responsivo desenvolvido em React, com HTML, CSS e JavaScript. Utiliza a biblioteca EmailJS para envio de mensagens diretamente pelo formulário de contato, sem necessidade de back-end. O projeto apresenta meus principais trabalhos, tecnologias dominadas e formas de contato, com foco em performance, acessibilidade e design limpo.",
        techs: "React.js, HTML, CSS, JavaScript, EmailJS",
        github: "https://github.com/marcosvitordev/portifolio-react", // substitua com o link real
        demo: "https://marcosvitordev.netlify.app/", // substitua com o link real
        imagem: imgProjeto5

    }

];

const Work = () => {
    const [atual, setAtual] = useState(0);
    const [animando, setAnimando] = useState(false);

    const mudarProjeto = (index) => {
        setAnimando(true);
        setTimeout(() => {
            setAtual(index);
            setAnimando(false);
        }, 300); // Tempo da animação
    };

    const proximo = () => mudarProjeto((atual + 1) % projetos.length);
    const anterior = () => mudarProjeto((atual - 1 + projetos.length) % projetos.length);

    const projeto = projetos[atual];

    return (
        <section className="work section" id="projects">
            <h2 className="section__title">Projetos</h2>
            <span className="section__subtitle">Meus Projetos</span>

            <div className={`work__container container grid ${animando ? 'fade-out' : 'fade-in'}`}>
                <div className="work__data">
                    <span className="work__number">{projeto.numero}</span>
                    <h3 className="work__title">{projeto.titulo}</h3>
                    <p className="work__description">{projeto.descricao}</p>
                    <p className="work__techs">{projeto.techs}</p>
                    <div className="work__buttons">
                        <a href={projeto.demo} target="_blank" rel="noreferrer"><span><i class="uil uil-link work__link__link"></i></span> Ver Projeto</a>
                        <a href={projeto.github} target="_blank" rel="noreferrer"><span><i class="uil uil-github work__link__link"></i></span> GitHub</a>
                    </div>
                </div>
                <div className="work__img-wrapper">
                    <img src={projeto.imagem} alt={projeto.titulo} className="work__img" />
                </div>
            </div>

            <div className="work__nav">
                <button onClick={anterior}>
                    <i className="uil uil-angle-left"></i>
                </button>
                <button onClick={proximo}>
                    <i className="uil uil-angle-right"></i>
                </button>
            </div>

        </section>
    );
};

export default Work;
