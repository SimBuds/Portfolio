import React, { useState } from 'react';
import '../assets/styles/ProjectList.css';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';
import project3Image from '../assets/images/project3.png';
import project4Image from '../assets/images/project4.png';
import project5Image from '../assets/images/project5.png';
import project6Image from '../assets/images/project6.png';
import project7Image from '../assets/images/project7.png';
import project8Image from '../assets/images/project8.png';

const projects = [
  {
    name: 'Menu Master Restaurant Management System',
    image: project1Image,
    description: 'This cross-platform web-based application is designed to streamline restaurant operations, from managing ingredient inventory and menu items to employee scheduling and more.',
    tags: ['React', 'Rust', 'MongoDB', 'Rocket'],
    link: 'https://github.com/SimBuds/menu-master-web'
  },
  {
    name: 'Gran Turismo 7 Race Tracker',
    image: project6Image,
    description: 'Start your engines! Using Python, this companion desktop application was created to help gamers track their laps in Gran Turismo 7. The player can select their desired racing map to record their best lap times and compare against other players on the leaderboard.',
    tags: ['Python', 'Flask', 'SQLite'],
    link: 'https://github.com/SimBuds/GT7-Racing-Program'
  },
  {
    name: 'Tic-Tac-Toe AI MiniMax',
    image: project7Image,
    description: 'Want to play? Grab a friend for a round of Tic-Tac-Toe, or challenge our AI! Built with JavaFX and powered by the Minimax algorithm, our AI will keep you on your toes.',
    tags: ['Java', 'AI', 'JavaFX', 'Minimax'],
    link: 'https://github.com/SimBuds/TicTacToe-MiniMax'
  },
  {
    name: 'JavaFX Programming Quiz Game',
    image: project8Image,
    description: 'This JavaFX application delivers an engaging quiz experience. Users can take quizzes, view their scores, and check the current leaderboard, all stored and managed through a text file.',
    tags: ['JavaFX', 'CRUD', 'Java'],
    link: 'https://github.com/SimBuds/JavaFX-CRUD-Quiz-Game'
  },
  {
    name: 'Airport Flight System Application',
    image: project5Image,
    description: 'Ready for take-off? Using C# and Object-Oriented Programming (OOP), this flight management system allows you to book, view and cancel your flights. Additionally, it uses CRUD operations for efficient user and flight data management.',
    tags: ['C#', 'ASP.NET', 'Data Structures', 'CRUD'],
    link: 'https://github.com/SimBuds/Flight-System-Using-CRUD-and-C-'
  },
  {
    name: 'Weather App with React',
    image: project2Image,
    description: 'Stay updated with the latest weather information! This React application fetches real-time weather data using the OpenWeatherMap API and displays it in a user-friendly interface.',
    tags: ['React', 'Axios', 'OpenWeatherMap API'],
    link: 'https://github.com/SimBuds/Weather-App-React'
  },
  {
    name: 'SpaceX Launch Tracker with Angular',
    image: project3Image,
    description: 'Blast off with this Angular application! Users can view upcoming SpaceX launches, as well as details about past launches, all fetched from the SpaceX API.',
    tags: ['Angular', 'SpaceX API', 'Bootstrap'],
    link: 'https://github.com/SimBuds/SpaceX-Angular'
  },
  {
    name: 'Employee-Management-System-MERN',
    image: project4Image,
    description: 'Manage employees, departments, and roles with ease using this MERN stack application. It features a user-friendly interface and a secure login system, ensuring seamless access to employee data.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/SimBuds/Employee-Management-System-MERN'
  }
];

const ProjectList = () => {
  const [imagesLoaded, setImagesLoaded] = useState({});

  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({...prev, [index]: true}));
  };

  return (
    <div className="project-list-wrapper">
      <div className="project-list-header">
        <h2>ALL PROJECTS</h2>
        <p>Here you can find the list of all my projects. Feel free to explore and see what I have been working on.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-list-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-list-image-link">
              <div className="project-list-image">
                {!imagesLoaded[index] && <div className="image-loading-placeholder">Loading...</div>}
                <img 
                  src={project.image} 
                  alt={project.name} 
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  style={{opacity: imagesLoaded[index] ? 1 : 0}}
                />
              </div>
            </a>
            <div className="project-list-content">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-list-title-link">
                <h3>{project.name}</h3>
              </a>
              <p>{project.description}</p>
              <div className="project-list-technologies">
                {project.tags.map(tag => (
                  <span key={tag} className="project-list-tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-list-link">
                Visit Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;