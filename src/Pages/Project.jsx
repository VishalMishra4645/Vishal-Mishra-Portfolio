import "../Style/Project.css";

import img1 from "../images/project/img1.png";
import img2 from "../images/project/img2.png";

const Project = () => {
  const projects = [
  {
    title: "Gaming Website UI",
    image: img1,
    description:
      "A modern gaming landing page built with React.js. The project focuses on responsive design, reusable components, smooth user experience and attractive visual presentation.",
    tech: "React.js • JavaScript • CSS3",
    live: "https://game-mkto.onrender.com",
    github: "#",
  },
  {
    title: "Photography Portfolio UI",
    image: img2,
    description:
      "A responsive photography portfolio website showcasing modern layouts, clean design principles and mobile-friendly user interfaces using core web technologies.",
    tech: "HTML5 • CSS3 • JavaScript",
    live: "https://photography02.netlify.app/",
    github: "#",
  },
];

  return (
    <section className="project" id="project">
      <div className="project-title">
        <h1>
          Featured <span>Projects</span>
        </h1>

        <p>Some of my recent work and personal projects.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;