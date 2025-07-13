import React from 'react';
import './skills.css';

const skills = {
  frontend: [
    { name: 'HTML', level: '100%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
    { name: 'CSS', level: '85%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
    { name: 'JavaScript', level: '80%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
    { name: 'React', level: '75%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind', level: '80%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', level: '70%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
    { name: 'TypeScript', level: '65%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' },
    { name: 'Next.js', level: '60%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg' },
  ],
  backend: [
    { name: 'Node.js', level: '75%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'Python', level: '70%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg' },
    { name: 'Java', level: '60%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg' },
    { name: 'C++', level: '55%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg' },
    { name: 'MySql', level: '50%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg' },
  ]
};

const renderSkills = (title, data) => (
  <div className="skills__category">
    <h3 className="skills__title">{title}</h3>
    <div className="skills__grid">
      {data.map((skill, index) => (
        <div className="skill__card" key={index}>
          <img src={skill.icon} alt={skill.name} className="skill__icon" />
          <p className="skill__name">{skill.name}</p>
          <p className="skill__level">{skill.level}</p>
          <div className="skill__bar">
            <span style={{ width: skill.level }}></span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DadosSkills = () => {
  return (
    <div className="skills__content">
      {renderSkills('Front-End', skills.frontend)}
      {renderSkills('Back-End', skills.backend)}
    </div>
  );
};

export default DadosSkills;
