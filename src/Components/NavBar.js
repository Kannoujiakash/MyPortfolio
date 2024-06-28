import "./NavBarStyle.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const colorChange = () => {
    if (window.scrollY > 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", colorChange);

  return (
    <div>
      <div className={color ? "Header Header-bg" : "Header"}>
        <ScrollLink to="/">
          <h1>Portfolio</h1>
        </ScrollLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setClick(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setClick(false)}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="project"
              smooth={true}
              duration={500}
              onClick={() => setClick(false)}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setClick(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <div className="Hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
