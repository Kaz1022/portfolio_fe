import React from "react";
import { useState } from "react";
import { images } from "../../constants";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
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
            <VscGithubAlt className="nav-icon" />
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

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "projects", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/Kaz1022"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setToggle(false)}
                >
                  <VscGithubAlt className="nav-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kazbaynton/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setToggle(false)}
                >
                  <FiLinkedin className="nav-icon" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
