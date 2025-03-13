import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCheckCircle } from 'react-icons/fa';
import heroImage from '../../assets/images/hero-image.jpg';
import { Link } from 'react-router-dom';
import '../../assets/styles/HeroSection.css';

const HeroSection = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&units=metric&appid=${apiKey}`;
      try {
        const response = await axios.get(url);
        const data = response.data;
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="hero-section container">
      <div className="row align-items-center">
        <div className="col-md-6 hero-text">
          <h1>Future Full Stack Developer</h1>
          <p className="lead">
            Hi, I'm Casey Hsu and my current goal is to become a junior developer that will work with a team to build 
            and manage applications. I recently graduated from George Brown College with honours in Computer Programming and Analysis.
          </p>
          <div className="location-weather">
            {weather && (
              <p>
                Based in {weather.name}, {weather.weather[0].description} <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" /> {Math.round(weather.main.temp)}°C
              </p>
            )}
          </div>
          <div className="availability">
            <p>
              <FaCheckCircle style={{ color: 'green' }} /> Available for work from 2025 onwards
            </p>
          </div>
          <Link to="/projectlist" className="btn btn-outline-light">View Projects</Link>
        </div>
        <div className="col-md-6 hero-image">
          <img src={heroImage} alt="Casey Hsu" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;