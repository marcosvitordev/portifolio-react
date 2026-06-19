
import DadosSkills from './DadosSkills';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Habilidades</h2>
            <span className="section__subtitle">Meu nível técnico</span>

            <div className="skills__container container">
                <DadosSkills />
            </div>
        </section>
    )
}

export default Skills
