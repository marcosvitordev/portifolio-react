import { ArrowUpRight, MapPin } from 'lucide-react';
import { Icon } from '@/components/common/Icon';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactForm } from '@/components/contact/ContactForm';
import { contactChannels } from '@/data/socialLinks';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="Contato"
          title="Vamos construir algo útil?"
          description="Tem um projeto, oportunidade ou desafio em mente? Envie uma mensagem ou escolha um canal direto."
        />

        <div className="contact-grid">
          <div className="contact-panel">
            <span className="eyebrow">Canais diretos</span>
            <h3>Uma boa conversa pode ser o começo de uma ótima solução.</h3>
            <p>
              Respondo assim que possível. Para ajudar, conte o contexto, o objetivo e o prazo
              esperado.
            </p>
            <div className="contact-location">
              <MapPin aria-hidden="true" />
              <span>
                Sena Madureira — Acre, Brasil
                <br />
                <small>Horário local: GMT−5</small>
              </span>
            </div>
            <ul className="contact-channels">
              {contactChannels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span>
                      <Icon name={channel.icon} />
                    </span>
                    <span>
                      <small>{channel.label}</small>
                      <strong>{channel.value}</strong>
                    </span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
