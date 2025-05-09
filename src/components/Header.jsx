import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <>
      <header className="header">
          <div className="header-left">
              <h1>Summaya Siddiqui</h1>
              <nav className="nav-links">
                <a
                  href="https://github.com/SummayaSiddiqui"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                >
                  <FontAwesomeIcon icon={faGithub} size="3x" className="github-icon" />
                </a>
                <a
                  href="https://linkedin.com/in/summaya-siddiqui"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="3x" className="linkedin-icon" />
                </a>
              </nav>
          </div>
      </header>
      <hr className="header-separator" />
    </>
  );
};

export default Header;