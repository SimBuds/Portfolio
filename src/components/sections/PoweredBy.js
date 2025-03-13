import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiDigitalocean } from 'react-icons/si';
import '../../assets/styles/PoweredBy.css';

const PoweredBy = () => {
  return (
    <div className="powered-by-section" id="poweredby">
      <div className="container">
        <span className="powered-by-text">My Portfolio is powered by</span>
        <div className="tech-icons">
          <div className="icon">
            <SiMongodb />
            <p>MongoDB</p>
          </div>
          <div className="icon">
            <SiExpress />
            <p>Express.js</p>
          </div>
          <div className="icon">
            <FaReact />
            <p>React</p>
          </div>
          <div className="icon">
            <FaNodeJs />
            <p>Node.js</p>
          </div>
          <div className="icon">
            <SiDigitalocean />
            <p>DigitalOcean</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweredBy;