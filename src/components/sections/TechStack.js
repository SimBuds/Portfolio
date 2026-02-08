import React from 'react';
import {
  siPython, siJavascript, siMysql, siMongodb, siPostgresql, siLinux, siApple,
  siWindows, siWordpress, siSpringboot, siReact, siDocker, siPostman, siGit
} from 'simple-icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/TechStack.css';

const techCategories = {
  "Programming Languages": [
    { name: 'JavaScript', color: '#F7DF1E', icon: siJavascript },
    { name: 'Java', color: '#f89820', icon: <FontAwesomeIcon icon={faCoffee} /> },
    { name: 'Python', color: '#3776AB', icon: siPython }
  ],
  "Databases": [
    { name: 'MongoDB', color: '#47A248', icon: siMongodb },
    { name: 'Postgres', color: '#336791', icon: siPostgresql },
    { name: 'MySQL', color: '#4479A1', icon: siMysql }
  ],
  "Operating Systems": [
    { name: 'Linux', color: '#FCC624', icon: siLinux },
    { name: 'Windows', color: '#0078D6', icon: siWindows },
    { name: 'Mac', color: '#A2AAAD', icon: siApple },
  ],
  "Frameworks": [
    { name: 'React', color: '#61DAFB', icon: siReact },
    { name: 'Spring', color: '#6DB33F', icon: siSpringboot },
    { name: 'WordPress', color: '#21759B', icon: siWordpress }
  ],
  "Tools": [
    { name: 'Git', color: '#F05032', icon: siGit },
    { name: 'Docker', color: '#2496ED', icon: siDocker },
    { name: 'Postman', color: '#FF6C37', icon: siPostman }
  ]
};

const layout = [
  ['Operating Systems', 'Programming Languages', 'Tools'],
  ['Databases', 'Frameworks'],
];

const renderIcon = (icon, name) => {
  if (React.isValidElement(icon)) {
    return (
      <span className="tech-icon" aria-hidden="true">
        {icon}
      </span>
    );
  }

  return (
    <svg
      className="tech-icon"
      viewBox="0 0 24 24"
      role="img"
      aria-label={`${name} icon`}
      focusable="false"
    >
      <path d={icon.path} />
    </svg>
  );
};

function TechStack() {
  return (
    <div className="tech-stack">
      <h2>MY TECH STACK</h2>
      <p>Check out my tech stack, to see which tools and languages I'm most comfortable with.</p>

      {layout.map((row, idx) => (
        <div className="category-row" key={idx}>
          {row.map(category => (
            <div className="category" key={category}>
              <h3>{category}</h3>
              <div className="tech-items">
                {techCategories[category].map(tech => (
                  <div
                    className="tech-item"
                    key={tech.name}
                    style={{ backgroundColor: tech.color }}
                  >
                    {renderIcon(tech.icon, tech.name)}
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TechStack;