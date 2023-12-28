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

function App() {
    return (
        <Router>
            <Nav />
            <Hero />
            <Experience />
            <Services />
            <Blogs />
            <Testimonial />
            <Contact />
            <Footer />
        </Router>
    );
}

export default App;
