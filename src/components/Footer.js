import React from "react";
import github from "./../assets/GitHub_Logo.png";
import linkedin from "./../assets/LI-Logo.png";
import twitter from "./../assets/Twitter-Logo.png";
import itch from "./../assets/itchio-logo-black.png";

const Footer = () => {
  return (
    <>
      <nav className="footer">
        <div className="footer-links">
          <ul>
            <li>
              <a href="https://github.com/gjcampbell777">
                <img
                  src={github}
                  alt="Github Logo"
                  height="auto"
                  width="100%"
                  style={{ maxWidth: "80px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gregoryjcampbell/">
                <img
                  src={linkedin}
                  alt="LinkedIn Logo"
                  height="auto"
                  width="100%"
                  style={{ maxWidth: "115px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Gregory_Soup">
                <img
                  src={twitter}
                  alt="Twitter Logo"
                  height="auto"
                  width="100%"
                  style={{ maxWidth: "45px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://gregorysoup.itch.io/">
                <img
                  src={itch}
                  alt="Itch Logo"
                  height="auto"
                  width="100%"
                  style={{ maxWidth: "100px" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Footer;