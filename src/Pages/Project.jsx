import React from "react";
import "../Style/Project.css";
import img1 from "../images/project/img1.png";
import img2 from "../images/project/img2.png";
import Contact from "../Pages/Contact";

const Project = () => {
  return (
    <>
      <div className="project" id="project">
        <h1>
          Latest <span>Project</span>
        </h1>
        <div className="project_content">
          <div className="project_content_left">
            <a href="https://game-mkto.onrender.com" target="_blank">
              <img src={img1} alt="" />
              <div className="hovering_effect_left">
                <h2>Game Site With React js</h2>
              </div>
            </a>
          </div>
          <div className="project_content_right">
            <a href="https://photography02.netlify.app/" target="_blank">
              <img src={img2} alt="" />
              <div className="hovering_effect_right">
                <h2>Basics HTML, CSS website</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Project;
