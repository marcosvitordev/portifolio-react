import { ArrowDown, ArrowRight, Download, MapPin, Sparkles } from 'lucide-react';
import profileImage from '@/assets/foto2.png';
import resume from '@/assets/CV.pdf';
import { Icon } from '@/components/common/Icon';
import { socialLinks } from '@/data/socialLinks';

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability">
            <span aria-hidden="true" /> Disponível para oportunidades
          </div>
          <p className="eyebrow">
            <Sparkles size={14} /> Full Stack Developer
          </p>
          <h1 id="hero-title">
            Software com propósito, <span>engenharia com clareza.</span>
          </h1>
          <p className="hero-lead">
            Olá, eu sou <strong>Marcos Vitor</strong> — Analista de Sistemas e estudante de
            Engenharia de Software. Transformo desafios reais em aplicações web completas,
            acessíveis e bem estruturadas.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              Conhecer projetos <ArrowRight />
            </a>
            <a className="button button--secondary" href="#contact">
              Vamos conversar
            </a>
            <a className="text-link" href={resume} download="Curriculo-Marcos-Vitor.pdf">
              <Download size={17} aria-hidden="true" /> Currículo
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={17} aria-hidden="true" /> Sena Madureira, Acre
            </span>
            <div className="social-row" aria-label="Redes profissionais">
              {socialLinks.slice(0, 2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${link.label} em uma nova aba`}
                >
                  <Icon name={link.icon} size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Retrato de Marcos Vitor">
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
          <div className="portrait-frame">
            <img
              src={profileImage}
              alt="Marcos Vitor sorrindo"
              width="643"
              height="641"
              fetchPriority="high"
            />
          </div>
          <div className="code-chip code-chip--top" aria-hidden="true">
            <span>01</span> build()
          </div>
          <div className="code-chip code-chip--bottom" aria-hidden="true">
            <span>✓</span> deploy ready
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about">
        <span>Explorar</span>
        <ArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
