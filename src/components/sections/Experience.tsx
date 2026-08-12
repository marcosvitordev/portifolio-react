import { BriefcaseBusiness, Check } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow="Experiência"
          title="Tecnologia, ensino e prática"
          description="Experiências que desenvolveram tanto competências técnicas quanto comunicação e colaboração."
          align="left"
        />

        <div className="timeline">
          {experiences.map((experience, index) => (
            <article className="timeline-item" key={experience.id}>
              <div className="timeline-marker">
                <BriefcaseBusiness aria-hidden="true" />
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <span className="timeline-index">0{index + 1}</span>
                    <h3>{experience.role}</h3>
                    <p>{experience.organization}</p>
                  </div>
                  <span className="status-badge">{experience.period}</span>
                </div>
                <p>{experience.description}</p>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>
                      <Check aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                {experience.technologies ? (
                  <div className="tag-list">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
