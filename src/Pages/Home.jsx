import "../Style/Home.css";
import img1 from "../images/img1.jpg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="greeting">👋 Hello, I'm</p>

        <h1>
          Vishal <span>Mishra</span>
        </h1>

        <h2>Software Developer</h2>

        <p className="home-description">
          Software Developer with hands-on experience in Angular development and
          modern web technologies. Skilled in building responsive user
          interfaces, integrating APIs, and developing full-stack applications
          using React, Node.js, Express.js, and MongoDB.
        </p>

        <div className="button-group">
          <a href="#project">
            <button className="primary-btn">
              View Projects
            </button>
          </a>

          <a href="/resume.pdf" download>
            <button className="secondary-btn">
              Download Resume
            </button>
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:yourmail@gmail.com">
            Email
          </a>
        </div>
      </div>

      <div className="home-image">
        <div className="image-card">
          <img src={img1} alt="Vishal Mishra" />
        </div>
      </div>
    </section>
  );
};

export default Home;