import React from 'react';
import {
  siPython, siJavascript, siCsharp, siPhp, 
  siAndroid, siOracle, siMysql, siMongodb,
  siPostgresql, siLinux, siApple, siWindows,
  siDotnet, siSpringboot, siReact, siAngular,
  siDocker, siPostman, siGit
} from 'simple-icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/TechStack.css';

const techCategories = {
  "Programming Languages": [
    { name: 'Java', color: '#f89820', icon: <FontAwesomeIcon icon={faCoffee} /> },
    { name: 'Python', color: '#3776AB', icon: siPython },
    { name: 'C#', color: '#239120', icon: siCsharp },
    { name: 'JavaScript', color: '#F7DF1E', icon: siJavascript },
    { name: 'PHP', color: '#777BB4', icon: siPhp },
    { name: 'Android', color: '#3DDC84', icon: siAndroid }
  ],
  "Databases": [
    { name: 'MongoDB', color: '#47A248', icon: siMongodb },
    { name: 'Postgres', color: '#336791', icon: siPostgresql },
    { name: 'MySQL', color: '#4479A1', icon: siMysql },
    { name: 'Oracle', color: '#F80000', icon: siOracle }
  ],
  "Operating Systems": [
    { name: 'Linux', color: '#FCC624', icon: siLinux },
    { name: 'Windows', color: '#0078D6', icon: siWindows },
    { name: 'Mac', color: '#A2AAAD', icon: siApple },
  ],
  "Frameworks": [
    { name: 'React', color: '#61DAFB', icon: siReact },
    { name: 'Spring', color: '#6DB33F', icon: siSpringboot },
    { name: 'ASP.NET', color: '#512BD4', icon: siDotnet },
    { name: 'Angular', color: '#DD0031', icon: siAngular }
  ],
  "Tools": [
    { name: 'Docker', color: '#2496ED', icon: siDocker },
    { name: 'Postman', color: '#FF6C37', icon: siPostman },
    { name: 'Git', color: '#F05032', icon: siGit }
  ]
};

function TechStack() {
  return (
    <div className="tech-stack">
      <h2>MY TECH STACK</h2>
      <p>Check out my tech stack, to see which tools and languages I'm most comfortable with.</p>
      <div className="category-row">
        {['Operating Systems', 'Programming Languages', 'Tools'].map(category => (
          <div className="category" key={category}>
            <h3>{category}</h3>
            <div className="tech-items">
              {techCategories[category].map(tech => (
                <div className="tech-item" key={tech.name} style={{ backgroundColor: tech.color }}>
                  {React.isValidElement(tech.icon) ? (
                    tech.icon
                  ) : (
                    <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: tech.icon.svg }} />
                  )}
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="category-row">
        {['Databases', 'Frameworks'].map(category => (
          <div className="category" key={category}>
            <h3>{category}</h3>
            <div className="tech-items">
              {techCategories[category].map(tech => (
                <div className="tech-item" key={tech.name} style={{ backgroundColor: tech.color }}>
                  {React.isValidElement(tech.icon) ? (
                    tech.icon
                  ) : (
                    <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: tech.icon.svg }} />
                  )}
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;