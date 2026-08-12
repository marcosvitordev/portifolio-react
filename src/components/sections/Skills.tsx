import { useMemo, useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { SectionHeading } from '@/components/common/SectionHeading';
import { skillCategories, skills, type SkillCategory } from '@/data/skills';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Todos');
  const visibleSkills = useMemo(
    () => skills.filter((skill) => activeCategory === 'Todos' || skill.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Tecnologias"
          title="Ferramentas escolhidas com intenção"
          description="Um repertório full stack organizado por contexto — sem barras de porcentagem arbitrárias."
        />

        <div className="filter-row" role="group" aria-label="Filtrar tecnologias por categoria">
          {skillCategories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? 'is-active' : undefined}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid" aria-live="polite">
          {visibleSkills.map((skill) => (
            <article className="skill-card" key={skill.name} title={skill.description}>
              <div className="skill-icon">
                <Icon name={skill.icon} />
              </div>
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>
              <span className="skill-tooltip" role="tooltip">
                {skill.description}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
