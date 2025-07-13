
import DadosSkills from './DadosSkills';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__containeir container grid">
                <DadosSkills />
            </div>
        </section>
    )
}

export default Skills