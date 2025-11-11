import { FaCheckCircle } from 'react-icons/fa';
import heroImage from '../../assets/images/hero-image.jpg';
import { Link } from 'react-router-dom';
import '../../assets/styles/HeroSection.css';

const HeroSection = () => {

  return (
    <div className="hero-section container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6 hero-text order-2 order-md-1">
          <h1>Software Developer</h1>
          <p className="lead">
          Hi, I'm Casey Hsu and my current goal is to become a junior developer who will work with a team to build and 
          manage applications. I recently graduated from George Brown College with honors in Computer Programming and Analysis.
          </p>
          <div className="availability">
            <p>
              <FaCheckCircle style={{ color: 'green' }} /> Available for work from 2025 onwards
            </p>
          </div>
          <Link to="/projectlist" className="btn btn-outline-light">View Projects</Link>
        </div>
        <div className="col-md-6 hero-image order-1 order-md-2">
          <img src={heroImage} alt="Casey Hsu" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;