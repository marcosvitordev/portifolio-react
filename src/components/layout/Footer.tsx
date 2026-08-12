import { ArrowUpRight } from 'lucide-react';
import { Icon } from '@/components/common/Icon';
import { navigationItems } from '@/data/navigation';
import { socialLinks } from '@/data/socialLinks';
import { SITE } from '@/constants/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div className="footer-intro">
          <a className="brand" href="#home" aria-label="Voltar ao início">
            marcosvitordev
          </a>
          <p>Portfólio pessoal de Marcos Vitor, analista de sistemas e desenvolvedor full stack.</p>
        </div>

        <div>
          <h2>Navegação</h2>
          <ul className="footer-links">
            {navigationItems.map((item) => (
              <li key={item.sectionId}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Conecte-se</h2>
          <ul className="footer-links">
            {socialLinks.slice(0, 3).map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <Icon name={link.icon} size={16} />
                  {link.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
        </p>
        <p>Feito no Acre, Brasil.</p>
      </div>
    </footer>
  );
}
