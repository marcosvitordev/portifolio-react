import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bx-award about__icon"></i>
                <h3 className="about__title ">Conhecimento Técnico</h3>
                <span className="about__subtitle">5 Anos</span>
            </div>
            <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Projetos</h3>
                <span className="about__subtitle">5 + Projetos</span>
            </div>
            <div className="about__box">
                <i class="bx bx-support about__icon"></i>
                <h3 className="about__title">Apoiar</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info