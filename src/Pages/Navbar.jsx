import React, { useState } from "react";
import "../Style/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
        >
          Port<span>F</span>olio.
        </Link>
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active-link"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active-link"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active-link"
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active-link"
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active-link"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active-link"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
};

export default Navbar;