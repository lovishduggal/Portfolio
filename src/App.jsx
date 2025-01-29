import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar/Nav';
import Hero from './components/HeroSection/Hero';
import Experience from './components/Experience/Experience';
import Services from './components/Favour/Services';
import Blogs from './components/Blog/Blogs';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import CompanyLogos from './components/Companies/Companies';
import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor/CustomCursor';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomCursor />
      <LoadingScreen isLoading={isLoading} />
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          visibility: isLoading ? 'hidden' : 'visible',
        }}
      >
        <Nav />
        <Hero />
        <CompanyLogos />
        <Experience />
        <Services />
        <Blogs />
        <Testimonial />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
