import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/FeaturedProjects';
import './assets/styles/App.css';

const ProjectListLazy = lazy(() => import('./pages/ProjectList'));
const ContactMeLazy = lazy(() => import('./pages/ContactMe'));

// Scroll to hash component
function ScrollToHash() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <ScrollToHash />
      <Suspense fallback={<div className="loading-container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#aboutme" component={AboutMe} />
          <Route path="/#projects" component={Projects} />
          <Route path="/contactme" element={<ContactMeLazy />} />
          <Route path="/projectlist" element={<ProjectListLazy />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;