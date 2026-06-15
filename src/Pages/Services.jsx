import "../Style/Services.css";
import Skills from "../Pages/Skills";

const Services = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="section-title">
          <h1>
            What I <span>Do</span>
          </h1>
          <p>
            Building modern, responsive and scalable web applications using
            latest technologies.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <i className="bi bi-code-slash"></i>

            <h2>Frontend Development</h2>

            <p>
              Creating responsive and interactive user interfaces using
              Angular, React, JavaScript, HTML5 and CSS3 with modern UI
              practices.
            </p>
          </div>

          <div className="service-card">
            <i className="bi bi-server"></i>

            <h2>Backend Development</h2>

            <p>
              Building REST APIs and server-side applications using Node.js,
              Express.js and integrating databases for real-world projects.
            </p>
          </div>

          <div className="service-card">
            <i className="bi bi-database"></i>

            <h2>Database Management</h2>

            <p>
              Designing and managing MongoDB databases, handling CRUD
              operations and optimizing data flow between frontend and backend.
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default Services;