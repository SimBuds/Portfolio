import React from 'react';
import '../../assets/styles/AboutMe.css';
import aboutImage from '../../assets/images/about-me-image.jpg';

const AboutMe = () => {
  return (
    <div className="about-section" id="aboutme">
      <div className="container">
      <h2>ABOUT ME</h2>
        <div className="row align-items-center">
          <div className="col-md-8 about-text">
            <p>During the COVID-19 pandemic, I decided to pursue my long-standing passion for computers and programming, 
              transitioning from my nine-year career as a professional chef.
            </p>
            <p>My interest in technology began at the age of eight when I built my first computer, and I have been deeply enthusiastic about the field ever since.</p>
            <p>I'm <strong>open to job opportunities</strong> where I can contribute, learn, and grow. If you have a suitable opportunity that aligns with my skills, please feel free to contact me.</p>
          </div>
          <div className="col-md-4 about-image">
            <img src={aboutImage} alt="Casey Hsu" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;