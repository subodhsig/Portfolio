import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='f-content'>
        <p>
          Contact:{" "}
          <a href='mailto:subodhsigdel63@gmail.com'>subodhsigdel63@gmail.com</a>
        </p>
        <div className='f-icons'>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            <Insta color='white' size='2rem' />
          </a>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            <Facebook color='white' size='2rem' />
          </a>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
          >
            <Github color='white' size='2rem' />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Subodh Sigdel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
