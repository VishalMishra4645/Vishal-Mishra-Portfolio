import React, { useState } from 'react'
import '../Style/Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [click , setClick] = useState(false)
    const closeMenu = () => setClick(false)
    const [box , setBox] = useState(false)
    const [active, setActive] = useState(0);

    
    

  return (
    <>
        <div className="navbar">
            <a className="logo">Port<span>F</span>olio.</a>
            <div className={`nav ${active ? 'active' : ''}`}>
                <ul>
                    <li><Link to='home' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link></li>
                    <li><Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link></li>
                    <li><Link to='services' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Services</Link></li>
                    <li><Link to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Skills</Link></li>
                    <li><Link to='project' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Project</Link></li>
                    <li><Link to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link></li>
                </ul>
            </div>
        <div className='menu'>
            <button onClick={()=> setBox(!box)}>&#9776;</button>
        </div>
        </div>

    </>
  )
}

export default Navbar