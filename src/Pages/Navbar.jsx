import React, { useState } from 'react'
import '../Style/Navbar.css'
import img1 from '../images/services/icon.png'
import img2 from '../images/Skills/skill.png'
import img3 from '../images/project/img3.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [color , setColor] = useState("home")

      return (
    <>
        <div className="navbar">
            <a className="logo">Port<span>F</span>olio.</a>
            <div className={`nav ${active ? 'active' : ''}`}>
                <ul>
                    <li><Link to='home' style={{color : color === 'home' && 'red'}}  spy={true} smooth={true} offset={-100} duration={500} onClick={()=> {/*setActive(false);*/ setColor("home"); console.log("asdas")}}><i class="bi bi-house-check"></i>&nbsp;&nbsp;&nbsp;Home</Link></li>
                    <li><Link to='about' style={{color : color === 'about' && 'red'}} spy={true} smooth={true} offset={-100} duration={500} onClick={()=> {/*setActive(false);*/ setColor("about")}}><i class="bi bi-person-lines-fill"></i>&nbsp;&nbsp;&nbsp;About</Link></li>
                    <li><Link to='services' style={{color : color === 'services' && 'red'}} spy={true} smooth={true} offset={-100} duration={500} onClick={()=> {/*setActive(false);*/ setColor("services")}}>Services</Link></li>
                    <li><Link to='skills' style={{color : color === 'skills' && 'red'}} spy={true} smooth={true} offset={-100} duration={500} onClick={()=> {/*setActive(false);*/ setColor("skills")}}>Skills</Link></li>
                    <li><Link to='project' style={{color : color === 'project' && 'red'}} spy={true} smooth={true} offset={-100} duration={500} onClick={()=> {/*setActive(false);*/ setColor("project")}}>Project</Link></li>
                    <li><Link to='contact' style={{color : color === 'contact' && 'red'}} spy={true} smooth={true} offset={-100} duration={500} onClick={()=> {/*setActive(false);*/ setColor("contact")}}>Contact</Link></li>
                </ul>
            </div>
        <div className='menu'>
            <button onClick={()=> setActive(!active)}>&#9776;</button>
        </div>
        </div>

    </>
  )
}

export default Navbar