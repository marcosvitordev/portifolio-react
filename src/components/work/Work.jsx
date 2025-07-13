import React, { useState } from 'react';
import './work.css';
// Importando imagens dos projetos
import imgProjeto1 from '../../assets/imgProjetos/projeto1.png';
import imgProjeto2 from '../../assets/work2.jpg';
import imgProjeto3 from '../../assets/work3.jpg';
import imgProjeto4 from '../../assets/work4.jpg';
import imgProjeto5 from '../../assets/work5.jpg';

const projetos = [
    {
        numero: "01",
        titulo: "Gerador de Certificados",
        descricao: "Sistema completo que gera certificados em PDF com QR Code para validação online.",
        techs: "Node.js, HTML, CSS, MySQL",
        github: "#",
        demo: "#",
        imagem: imgProjeto1
    },
    {
        numero: "02",
        titulo: "Controle de Contas",
        descricao: "Organize suas finanças pessoais com controle de ganhos, gastos e saldo mensal.",
        techs: "React, Node.js, MySQL",
        github: "#",
        demo: "#",
        imagem: imgProjeto2
    },
    {
        numero: "03",
        titulo: "Jogo Siga a Linha",
        descricao: "Jogo educativo com movimento do mouse para desenvolver coordenação motora.",
        techs: "HTML, CSS, JavaScript",
        github: "#",
        demo: "#",
        imagem: imgProjeto3
    },
    {
        numero: "04",
        titulo: "Jogo Siga a Linha",
        descricao: "Jogo educativo com movimento do mouse para desenvolver coordenação motora.",
        techs: "HTML, CSS, JavaScript",
        github: "#",
        demo: "#",
        imagem: imgProjeto4
    },
    {
        numero: "05",
        titulo: "Jogo Siga a Linha",
        descricao: "Jogo educativo com movimento do mouse para desenvolver coordenação motora.",
        techs: "HTML, CSS, JavaScript",
        github: "#",
        demo: "#",
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
