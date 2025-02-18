import React from "react";
import "../Style/Skills.css";
import img1 from "../images/Skills/html.png";
import img2 from "../images/Skills/css.png";
import img3 from "../images/Skills/JavaScript.png";
import img4 from "../images/Skills/c.png";
import img5 from "../images/Skills/c++.png";
import img6 from "../images/Skills/React.webp";
import Project from "../Pages/Project";

const Skills = () => {
  return (
    <>
      <div className="skills" id="skills">
        <h1>
          My <span>Skills</span>
        </h1>
        <div className="skills_container">
          <div className="skills_left">
            <h2><span>Technical</span> Skills</h2>
            <hr />
            <div className="skills_left_bottom">
              <div className="skills_left_bottom_img skills_left_bottom_img1">
                <img src={img1} alt="" />
                <h4>HTML</h4>
                <hr />
              </div>
              <div className="skills_left_bottom_img skills_left_bottom_img2">
                <img src={img2} alt="" />
                <h4>CSS</h4>
                <hr />
              </div>
              <div className="skills_left_bottom_img skills_left_bottom_img3">
                <img src={img3} alt="" />
                <h4>JavaScript</h4>
                <hr />
              </div>
              <div className="skills_left_bottom_img skills_left_bottom_img4">
                <img src={img4} alt="" />
                <h4>C</h4>
                <hr />
              </div>
              <div className="skills_left_bottom_img skills_left_bottom_img5">
                <img src={img5} alt="" />
                <h4>C++</h4>
                <hr />
              </div>
              <div className="skills_left_bottom_img skills_left_bottom_img6">
                <img src={img6} alt="" />
                <h4>React</h4>
                <hr />
              </div>
            </div>
          </div>
          <div className="skills_right">
            <h2><span>Professional</span> Skills</h2>
            <hr />
            <div className="skills_right_top">
              <div className="skills_right_top_left">
                <div className="skills_right_top_left_top">
                  <h1>90%</h1>
                </div>
                <h3>creativity</h3>
              </div>
              <div className="skills_right_top_right">
                <div className="skills_right_top_right_top">
                  <h1>65%</h1>
                </div>
                <h3>Communication</h3>
              </div>
            </div>
            <div className="skills_right_bottom">
              <div className="skills_right_bottom_left">
                <div className="skills_right_bottom_left_top">
                  <h1>60%</h1>
                </div>
                <h3>Problem Solving</h3>
              </div>
              <div className="skills_right_bottom_right">
                <div className="skills_right_bottom_right_top">
                  <h1>95%</h1>
                </div>
                <h3>TeamWork</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Project />
    </>
  );
};

export default Skills;
