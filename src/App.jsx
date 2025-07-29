import LoadingSpinner from './components/LoadingSpinner';
import Starfield from './components/Starfield';
import Hero from './Pages/Hero';
import Profile from './Pages/Profile';
import FeaturedProjects from './Pages/FeaturedProjects';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import "./sass/App.scss";

function App() {
    return (
        <main>
            <LoadingSpinner />
            <Hero />
            <Starfield />
            <Profile />
            <FeaturedProjects />
            <AboutMe />
            <Contact />
        </main>
    )
}

export default App