import '../Style/Home.css'
import img1 from '../images/img1.jpg'
import About from '../Pages/About';

const Home = () => {
  return (<>
    <div className="home">
      <div className="home_left">
        <h2>Helllo, It's Me</h2>
        <h1>Vishal Mishra</h1>
        <h3>And I'm a <span> <b>Frontend Developer</b> </span></h3>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          explicabo unde alias, aperiam beatae officiis accusantium. At
          voluptates doloremque, incidunt dolorem consequuntur debitis magnam
          rerum ut minus perferendis voluptatibus dolores?
        </p> */}
        <a href="#contact"><button>Hier Me</button></a>
        <a href="" className="home_btn2"><button>Download CV</button></a>
      </div>
      <div className="home_right">
        <img src={img1} alt="" />
      </div>
    </div>
      <About/>
      </>
  );
};

export default Home;
