import '../Style/About.css'
import img1 from '../images/img1.jpg'
import Services from '../Pages/Services'


const About = () => {
  return (
    <>
      <div className="about" id='about'>
        <img src={img1} alt="" />
        <div className="about_right">
          <h1>About <span>Me</span></h1> <br />
          <h2>Fronted Developer</h2> <br />
          <font face="Verdana" size="3" color="white">
            Thanks for your interest, here
            is a quick story of me and this
            website. <br /> <br />
            I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. <br /> <br />

            I do my work mainly in <u><span>React js</span></u> ,
            JavaScript. I know Web Development,
            LINUX and database as well. <br /><br />

            This website is basically one of my
            Web Development project which is
            built using <u><span>HTML</span></u>, <u><span>CSS</span></u> & <u><span>REACT JS</span></u>.
            Here one can also find ideas for
            projects in different languages. <br /><br />

            Thanks again for reading this,
            because of people like you, it
            exists and prospers! 
          </font>
        </div>
      </div>
      <Services />
    </>
  )
}

export default About