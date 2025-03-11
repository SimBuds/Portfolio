import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../assets/Header.css';
import favicon from '../assets/images/icon.png';

const Header = () => {
  return (
    <div style={{ marginBottom: '70px' }}>
      <Navbar className="navbar fixed-top" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={favicon}
            className="d-inline-block align-top"
            alt="Logo"
          />
          <span className="brand-text">Casey Hsu</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-center">
            <Nav.Item>
              <HashLink smooth to="/#projects" className="nav-link">Showcase</HashLink>
            </Nav.Item>
            <Nav.Item>
              <HashLink smooth to="/projectlist" className="nav-link">Projects</HashLink>
            </Nav.Item>
            <Nav.Item>
              <a href={`${process.env.PUBLIC_URL}/resume.pdf`} className="nav-link">Resume</a>
            </Nav.Item>
            <Nav.Item>
              <a href={`${process.env.PUBLIC_URL}/extensions/T-Money-Extension.zip`} download className="nav-link">Download</a>
            </Nav.Item>
            <Nav.Item>
              <HashLink smooth to="/#aboutme" className="nav-link">About Me</HashLink>
            </Nav.Item>
          </Nav>
          <Nav className="navbar-right">
            <Nav className="navbar-social">
              <Nav.Item>
                <a href="https://twitter.com/caseyhsuble" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </Nav.Item>
              <Nav.Item>
                <a href="https://github.com/SimBuds" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </Nav.Item>
              <Nav.Item>
                <a href="https://www.linkedin.com/in/casey-hsu-750b39273" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </Nav.Item>
            </Nav>
            <Nav.Item>
              <NavLink to="/contactme" className="btn btn-outline-light">Let's Chat</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
