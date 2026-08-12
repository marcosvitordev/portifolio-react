import { Code2, GraduationCap, MapPinned, Target } from 'lucide-react';
import aboutImage from '@/assets/foto1.jpg';
import { SectionHeading } from '@/components/common/SectionHeading';

const principles = [
  { icon: Code2, title: 'Construção ponta a ponta', text: 'Do modelo de dados à interface final.' },
  { icon: Target, title: 'Foco no problema', text: 'Tecnologia como meio para gerar resultado.' },
  { icon: GraduationCap, title: 'Evolução contínua', text: 'Engenharia de Software em formação.' },
];

export function About() {
  return (
    <section className="section section--muted" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="Sobre"
          title="Tecnologia com contexto humano"
          description="Minha trajetória combina educação, desenvolvimento de software e projetos voltados a desafios reais."
        />

        <div className="about-grid">
          <div className="about-image-wrap">
            <img
              src={aboutImage}
              alt="Retrato profissional de Marcos Vitor"
              width="648"
              height="976"
              loading="lazy"
            />
            <div className="about-location">
              <MapPinned aria-hidden="true" />
              <span>
                Construindo do Acre
                <br />
                <strong>para qualquer lugar</strong>
              </span>
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow">Desde 2020 no desenvolvimento web</span>
            <h3>Curiosidade técnica, disciplina e vontade de transformar ideias em sistemas.</h3>
            <p>
              Sou Analista de Sistemas, formado em Análise e Desenvolvimento de Sistemas pelo IFAC e
              estudante de Engenharia de Software. Trabalho com o ciclo completo de aplicações:
              arquitetura, APIs, bancos de dados e experiências responsivas no front-end.
            </p>
            <p>
              Minha experiência em educação tecnológica fortaleceu uma habilidade essencial na
              engenharia: explicar conceitos complexos com clareza, colaborar e aprender
              continuamente.
            </p>

            <div className="principles-grid">
              {principles.map(({ icon: PrincipleIcon, title, text }) => (
                <article key={title}>
                  <PrincipleIcon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
