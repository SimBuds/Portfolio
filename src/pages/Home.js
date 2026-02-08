import { Container } from 'react-bootstrap';
import HeroSection from '../components/sections/HeroSection.js';
import TechStack from '../components/sections/TechStack.js';
import FeaturedProjects from '../components/sections/FeaturedProjects.js';
import AboutMe from '../components/sections/AboutMe.js';
<<<<<<< HEAD
import ReachMe from '../components/sections/ReachMe.js';
=======
>>>>>>> b0db196 (Initial portfolio setup)
import PoweredBy from '../components/sections/PoweredBy.js';

import '../assets/styles/Home.css';

const Home = () => {
  return (
    <Container fluid className="home-layout">
      <section id="hero" aria-label="Hero Section">
        <HeroSection />
      </section>
      <section id="projects" aria-label="Featured Projects">
        <FeaturedProjects />
      </section>
      <section id="techstack" aria-label="Technology Stack">
        <TechStack />
      </section>
      <section id="aboutme" aria-label="About Me">
        <AboutMe />
      </section>
<<<<<<< HEAD
      <section id="contact" aria-label="Reach Me">
        <ReachMe />
      </section>
=======
>>>>>>> b0db196 (Initial portfolio setup)
      <section id="powered-by" aria-label="Powered By">
        <PoweredBy />
      </section>
    </Container>
  );
};

export default Home;
