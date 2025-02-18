import React from "react";
import "../Style/Services.css";
import Skills from "../Pages/Skills";

const Services = () => {
  return (
    <>
      <div className="services" id="services">
        <h1>
          My<span>Services</span>
        </h1>
        <div className="services_main">
          <div className="services_container services_container1">
            <i class="bi bi-braces"></i> <br />
            <h2>UI/UX Design</h2> <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Earum explicabo, aperiam sit itaque 
              dicta nam modi vel at. Numquam sapiente iste 
              aspernatur a consequatur rerum. Nesciunt, 
              perspiciatis ratione!
            </p>
            <button>Learn More</button>
          </div>
          <div className="services_container services_container2">
            <i class="bi bi-crop"></i>
            <h2>Web Design</h2> <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Earum explicabo, aperiam sit itaque 
              quae iusto dicta nam modi vel at. Numquam sapiente iste 
              aspernatur a consequatur rerum. Nesciunt, 
              perspiciatis ratione!
            </p>
            <button>Learn More</button>
          </div>
          <div className="services_container services_container3">
          <i class="bi bi-apple"></i>
            <h2>App Design</h2> <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Earum explicabo, aperiam sit itaque quae iusto 
              dicta nam modi vel at. Numquam sapiente iste 
              aspernatur a consequatur rerum. Nesciunt, 
              perspiciatis ratione!
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default Services;
