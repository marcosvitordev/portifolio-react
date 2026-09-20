import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
import axionLogo from '@/assets/axion-software.png';

export function CompanyCard() {
  return (
    <article className="company-card" id="axion-software" aria-labelledby="company-title">
      <div className="company-identity">
        <div className="company-logo">
          <img src={axionLogo} alt="Axion Software" width="1254" height="1254" loading="lazy" />
        </div>
        <span className="company-badge">
          <BriefcaseBusiness size={16} aria-hidden="true" /> Atuação como PJ
        </span>
      </div>

      <div className="company-content">
        <span className="eyebrow">Minha empresa</span>
        <h3 id="company-title">À frente da Axion Software</h3>
        <p>
          Além da minha atuação como desenvolvedor, sou proprietário da Axion Software. Também
          trabalho como pessoa jurídica (PJ), desenvolvendo aplicações web, sistemas e soluções sob
          medida para empresas.
        </p>
        <p className="company-registration">
          <strong>CNPJ</strong> <span>67.564.248/0001-56</span>
        </p>
        <a className="button button--primary" href="#contact">
          Conversar sobre um projeto PJ <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
