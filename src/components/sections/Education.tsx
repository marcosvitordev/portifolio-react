import { BookOpen, Clock3, GraduationCap } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { certifications, education } from '@/data/education';

export function Education() {
  return (
    <section className="section section--muted" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          eyebrow="Estudos"
          title="Formação acadêmica"
          description="Graduações e cursos que fazem parte da minha formação profissional."
        />

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.id}>
              <div className="education-icon">
                <GraduationCap aria-hidden="true" />
              </div>
              <span
                className={`status-badge${item.status === 'Cursando' ? ' status-badge--active' : ''}`}
              >
                {item.status}
              </span>
              <h3>{item.course}</h3>
              <p>{item.institution}</p>
              <span>
                <Clock3 aria-hidden="true" /> {item.period}
              </span>
            </article>
          ))}
        </div>

        <div className="certifications-block">
          <div>
            <span className="eyebrow">Formação complementar</span>
            <h3>Cursos e certificações</h3>
          </div>
          <div className="certification-list">
            {certifications.map((item) => (
              <article key={`${item.name}-${item.issuer}`}>
                <BookOpen aria-hidden="true" />
                <div>
                  <h4>{item.name}</h4>
                  <p>
                    {item.issuer} · {item.period}
                  </p>
                </div>
                <span>{item.workload}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
