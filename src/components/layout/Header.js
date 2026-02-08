import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../../assets/styles/Header.css';
import favicon from '../../assets/images/nav-image.jpg';

const Header = () => {
  return (
    <div style={{ marginBottom: '70px' }}>
      <Navbar className="navbar fixed-top" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img
            src={favicon}
            className="d-inline-block align-top"
            alt="Casey Hsu's Logo"
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
              <HashLink smooth to="/#aboutme" className="nav-link">About Me</HashLink>
            </Nav.Item>
            <Nav.Item>
              <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
            </Nav.Item>
          </Nav>
          <Nav className="navbar-right">
            <Nav className="navbar-social">
              <Nav.Item>
                <a href="https://twitter.com/caseyhsuble" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="Twitter profile">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </Nav.Item>
              <Nav.Item>
                <a href="https://github.com/SimBuds" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="GitHub profile">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </Nav.Item>
              <Nav.Item>
                <a href="https://www.linkedin.com/in/casey-hsu/" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="LinkedIn profile">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </Nav.Item>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
