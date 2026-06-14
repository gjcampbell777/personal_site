import React from "react";
import github from "./../assets/GitHub_Logo.png";
import linkedin from "./../assets/LI-Logo.png";

const Footer = () => {
  return (
    <footer className="footer" style={{ 
      backgroundColor: '#333', 
      color: 'white', 
      padding: '20px', 
      textAlign: 'center',
      marginTop: '40px'
    }}>
      <div className="footer-links">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <li>
            <a href="https://github.com/gjcampbell777" target="_blank" rel="noreferrer noopener" style={{ color: 'white' }}>
              {<img src={github} alt="GitHub profile" style={{ height: '30px' }}/>}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gregoryjcampbell/" target="_blank" rel="noreferrer noopener" style={{ color: 'white' }}>
              {<img src={linkedin} alt="LinkedIn profile" style={{ height: '30px' }} />}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
