import "./skills.css";

const skillCategories = [
  {
    title: "Desenvolvimento Web",
    skills: [
      {
        name: "JavaScript",
        level: "85%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      },
      {
        name: "TypeScript",
        level: "78%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      },
      {
        name: "HTML5",
        level: "95%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      },
      {
        name: "CSS3",
        level: "90%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      },
      {
        name: "React",
        level: "85%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        level: "80%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js",
        level: "85%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        level: "78%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
    ],
  },
  {
    title: "Back-end",
    skills: [
      {
        name: "NestJS",
        level: "78%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      { name: "APIs REST", level: "86%", iconClass: "uil uil-server-network" },
      { name: "Autenticação", level: "78%", iconClass: "uil uil-shield-check" },
      { name: "JWT", level: "76%", iconClass: "uil uil-key-skeleton" },
      { name: "CRUD", level: "90%", iconClass: "uil uil-edit-alt" },
      {
        name: "Integração com bancos",
        level: "84%",
        iconClass: "uil uil-database",
      },
      {
        name: "TypeORM",
        level: "76%",
        iconClass: "uil uil-brackets-curly",
      },
      {
        name: "Prisma ORM",
        level: "72%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      { name: "Swagger", level: "70%", iconClass: "uil uil-file-search-alt" },
    ],
  },
  {
    title: "Front-end",
    skills: [
      {
        name: "TailwindCSS",
        level: "82%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Alpine.js",
        level: "70%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/alpinejs/alpinejs-original.svg",
      },
      {
        name: "Design Responsivo",
        level: "86%",
        iconClass: "uil uil-mobile-android",
      },
      {
        name: "Acessibilidade Web",
        level: "76%",
        iconClass: "uil uil-wheelchair",
      },
      { name: "EmailJS", level: "72%", iconClass: "uil uil-envelope-upload" },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      {
        name: "MySQL",
        level: "85%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        level: "82%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "SQLite",
        level: "74%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      {
        name: "Git",
        level: "86%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        level: "86%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Linux Ubuntu",
        level: "76%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
      },
      {
        name: "NPM",
        level: "80%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      },
      {
        name: "Vercel",
        level: "78%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "DigitalOcean Spaces",
        level: "70%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
      },
      {
        name: "Android Studio",
        level: "70%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      },
      { name: "Scrum", level: "72%", iconClass: "uil uil-users-alt" },
    ],
  },
  {
    title: "Outras Linguagens",
    skills: [
      {
        name: "PHP",
        level: "76%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
      },
      {
        name: "Java",
        level: "80%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        level: "72%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "C",
        level: "66%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "XML",
        level: "70%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg",
      },
    ],
  },
];

const renderSkillIcon = (skill) => {
  if (skill.icon) {
    return <img src={skill.icon} alt="" className="skill__icon" />;
  }

  return <i className={`${skill.iconClass} skill__icon skill__icon--line`}></i>;
};

const DadosSkills = () => {
  return (
    <div className="skills__content">
      {skillCategories.map((category) => (
        <div className="skills__category" key={category.title}>
          <h3 className="skills__title">{category.title}</h3>

          <div className="skills__grid">
            {category.skills.map((skill) => (
              <article className="skill__card" key={skill.name}>
                <div className="skill__header">
                  {renderSkillIcon(skill)}
                  <div>
                    <p className="skill__name">{skill.name}</p>
                    <p className="skill__level">{skill.level}</p>
                  </div>
                </div>

                <div
                  className="skill__bar"
                  aria-label={`${skill.name}: ${skill.level}`}
                >
                  <span style={{ width: skill.level }}></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DadosSkills;
