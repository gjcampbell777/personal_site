import React from "react";
import github from "./../assets/GitHub_Logo.png";
import linkedin from "./../assets/LI-Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li>
            <a href="https://github.com/gjcampbell777" target="_blank" rel="noreferrer noopener">
              <img src={github} alt="GitHub profile" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gregoryjcampbell/" target="_blank" rel="noreferrer noopener">
              <img src={linkedin} alt="LinkedIn profile" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
