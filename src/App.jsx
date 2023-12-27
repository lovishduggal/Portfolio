import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar/Nav';
import Hero from './components/HeroSection/Hero';
import Experience from './Experience/Experience';
function App() {
    return (
        <Router>
            <Nav />
            <Hero />
            <Experience />
        </Router>
    );
}

export default App;
