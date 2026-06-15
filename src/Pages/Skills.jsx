import "../Style/Skills.css";
import Project from "../Pages/Project";

import html from "../images/Skills/html.png";
import css from "../images/Skills/css.png";
import js from "../images/Skills/JavaScript.png";
import angular from "../images/Skills/angular.png";
import react from "../images/Skills/React.webp";
import bootstrap from "../images/Skills/bootstrap.png";

const Skills = () => {
  const techStack = [
    { name: "HTML5", img: html },
    { name: "CSS3", img: css },
    { name: "JavaScript", img: js },
    { name: "React.js", img: react },
    { name: "Angular", img: angular }, 
    // { name: "TypeScript", img: js },
    { name: "Bootstrap", img: bootstrap },
    { name: "Node.js", img: js },
    { name: "Express.js", img: js },
    { name: "MongoDB", img: js },
    // { name: "Git", img: js },
    { name: "REST API", img: js },
  ];

  return (
    <>
      <section className="skills" id="skills">
        <div className="skills-title">
          <h1>
            My <span>Skills</span>
          </h1>

          <p>
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="skills-grid">
          {techStack.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* <Project /> */}
    </>
  );
};

export default Skills;