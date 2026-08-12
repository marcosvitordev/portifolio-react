import { ArrowDown, ArrowRight, Download, MapPin } from 'lucide-react';
import profileImage from '@/assets/foto2.png';
import resume from '@/assets/CV.pdf';
import { socialLinks } from '@/data/socialLinks';

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-grid container">
        <aside className="hero-social" aria-label="Redes profissionais">
          {socialLinks.slice(0, 2).map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </aside>

        <div className="hero-copy">
          <p className="hero-intro">Olá, eu sou</p>
          <h1 id="hero-title">Marcos Vitor</h1>
          <p className="hero-role">
            <span aria-hidden="true" />
            <strong>Analista de Sistemas &amp; Full Stack Developer</strong>
          </p>
          <p className="hero-lead">
            Sou apaixonado por tecnologia e pelo desenvolvimento de soluções úteis. Crio aplicações
            web completas, interfaces responsivas e sistemas bem estruturados a partir do Acre.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#contact">
              Diga olá <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#projects">
              Ver projetos
            </a>
            <a className="text-link" href={resume} download="Curriculo-Marcos-Vitor.pdf">
              <Download size={17} aria-hidden="true" /> Currículo
            </a>
          </div>

          <p className="hero-location">
            <MapPin aria-hidden="true" /> Sena Madureira, Acre
          </p>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <img
              src={profileImage}
              alt="Marcos Vitor sorrindo"
              width="643"
              height="641"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about">
        <span>Rolar para baixo</span>
        <ArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
