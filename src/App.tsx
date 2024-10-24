import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <Router> {/* Le Router englobe tout le contenu de l'application pour gérer la navigation */}
      <div className="App">
        <Header />
        <Routes> {/* Définit les différentes routes de l'application */}
          <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil ("/") */}
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
}

export default App;