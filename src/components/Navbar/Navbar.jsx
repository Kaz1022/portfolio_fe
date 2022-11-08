import React from "react";

import { images } from "../../constants";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "projects", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex nav-icon">
          <div />
          <a
            href="https://github.com/Kaz1022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubAlt className="nav-icon"/>
          </a>
        </li>
        <li className="app__flex nav-icon">
          <div />
          <a
            href="https://www.linkedin.com/in/kazbaynton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className="nav-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
