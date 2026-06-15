import "../Style/About.css";
import img1 from "../images/img1.jpg";
import Services from "../Pages/Services";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about-image">
          <div className="about-image-card">
            <img src={img1} alt="Vishal Mishra" />
          </div>
        </div>

        <div className="about-content">
          <h1>
            About <span>Me</span>
          </h1>

          <h3>Software Developer</h3>

          <p>
            I am a passionate Software Developer with hands-on experience in
            Angular development and modern web technologies. I enjoy building
            responsive, scalable, and user-friendly applications that solve
            real-world problems.
          </p>

          <p>
            My expertise includes React.js, Angular, JavaScript, HTML5, CSS3,
            Bootstrap, and REST API integration. I am also expanding my
            full-stack development skills using Node.js, Express.js, and
            MongoDB.
          </p>

          <p>
            I have worked on academic and personal projects including portfolio
            websites, management systems, and e-commerce applications. My goal
            is to continuously improve my technical skills and contribute to
            impactful software products.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <h2>6+</h2>
              <span>Months Experience</span>
            </div>

            <div className="stat-box">
              <h2>2+</h2>
              <span>Projects Completed</span>
            </div>

            <div className="stat-box">
              <h2>100%</h2>
              <span>Learning Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* <Services /> */}
    </>
  );
};

export default About;