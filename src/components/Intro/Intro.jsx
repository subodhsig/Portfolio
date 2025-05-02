import React, { useContext } from "react";
import "./Intro.css";
import boy3 from "../../img/boy3.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 1.5, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='intro-section' id='Intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span style={{ color: darkMode ? "white" : "#1a1a1a" }}>
            Hy! I Am
          </span>
          <span style={{ color: darkMode ? "#ff9500" : "#1a1a1a" }}>
            Subodh Sigdel
          </span>
          <span style={{ color: darkMode ? "#e0e0e0" : "#4a4a4a" }}>
            MERN Stack Developer
          </span>
        </div>
        <Link to='contact' smooth={true} spy={true}>
          <button className='button i-button'>Hire me</button>
        </Link>
        <div className='i-icons'>
          <a
            href='https://github.com/subodhsig'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub Profile'
          >
            <img src={Github} alt='GitHub Profile' />
          </a>
          <a
            href='https://www.linkedin.com/in/subodh-sigdel-204aaa319'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn Profile'
          >
            <img src={LinkedIn} alt='LinkedIn Profile' />
          </a>
          <a
            href='https://www.instagram.com/sigdelsubodh/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram Profile'
          >
            <img src={Instagram} alt='Instagram Profile' />
          </a>
        </div>
      </div>
      <div className='i-right'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition}
          className='i-image'
        >
          <img src={boy3} alt='Subodh Sigdel' className='main-img' />
        </motion.div>
        <div className='skills-section'>
          <h3 style={{ color: darkMode ? "#e0e0e0" : "#1a1a1a" }}>My Skills</h3>
          <div className='skill'>
            <label style={{ color: darkMode ? "#e0e0e0" : "#4a4a4a" }}>
              React
            </label>
            <div className='skill-bar'>
              <div className='skill-progress' style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className='skill'>
            <label style={{ color: darkMode ? "#e0e0e0" : "#4a4a4a" }}>
              Node.js
            </label>
            <div className='skill-bar'>
              <div className='skill-progress' style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className='skill'>
            <label style={{ color: darkMode ? "#e0e0e0" : "#4a4a4a" }}>
              MongoDB
            </label>
            <div className='skill-bar'>
              <div className='skill-progress' style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className='skill'>
            <label style={{ color: darkMode ? "#e0e0e0" : "#4a4a4a" }}>
              Express
            </label>
            <div className='skill-bar'>
              <div className='skill-progress' style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
