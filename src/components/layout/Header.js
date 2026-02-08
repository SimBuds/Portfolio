import { Navbar, Nav } from 'react-bootstrap';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
import { Link } from "react-router-dom";
>>>>>>> b0db196 (Initial portfolio setup)
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../../assets/styles/Header.css';
import favicon from '../../assets/images/nav-image.jpg';

const Header = () => {
  return (
    <div style={{ marginBottom: '70px' }}>
      <Navbar className="navbar fixed-top" expand="lg">
<<<<<<< HEAD
        <Navbar.Brand href="/">
          <img
            src={favicon}
            className="d-inline-block align-top"
            alt="Logo"
=======
        <Navbar.Brand as={Link} to="/">
          <img
            src={favicon}
            className="d-inline-block align-top"
            alt="Casey Hsu's Logo"
>>>>>>> b0db196 (Initial portfolio setup)
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
<<<<<<< HEAD
              <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
            </Nav.Item>
            <Nav.Item>
              <HashLink smooth to="/#aboutme" className="nav-link">About Me</HashLink>
=======
              <HashLink smooth to="/#aboutme" className="nav-link">About Me</HashLink>
            </Nav.Item>
            <Nav.Item>
              <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
>>>>>>> b0db196 (Initial portfolio setup)
            </Nav.Item>
          </Nav>
          <Nav className="navbar-right">
            <Nav className="navbar-social">
              <Nav.Item>
<<<<<<< HEAD
                <a href="https://twitter.com/caseyhsuble" target="_blank" rel="noopener noreferrer" className="nav-link">
=======
                <a href="https://twitter.com/caseyhsuble" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="Twitter profile">
>>>>>>> b0db196 (Initial portfolio setup)
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </Nav.Item>
              <Nav.Item>
<<<<<<< HEAD
                <a href="https://github.com/SimBuds" target="_blank" rel="noopener noreferrer" className="nav-link">
=======
                <a href="https://github.com/SimBuds" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="GitHub profile">
>>>>>>> b0db196 (Initial portfolio setup)
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </Nav.Item>
              <Nav.Item>
<<<<<<< HEAD
                <a href="https://www.linkedin.com/in/casey-hsu/" target="_blank" rel="noopener noreferrer" className="nav-link">
=======
                <a href="https://www.linkedin.com/in/casey-hsu/" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="LinkedIn profile">
>>>>>>> b0db196 (Initial portfolio setup)
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </Nav.Item>
            </Nav>
<<<<<<< HEAD
            <Nav.Item>
              <NavLink to="/contactme" className="btn btn-outline-light">Let's Chat</NavLink>
            </Nav.Item>
=======
>>>>>>> b0db196 (Initial portfolio setup)
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
