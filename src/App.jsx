import './App.css'
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import About from './components/About/About';
import Admission from './components/Admission/Admission';
import Clubs from './components/Clubs/Clubs';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/gallery') {
      window.scrollTo(0, 0); // Scroll to top only for the Gallery page
    }
  }, [location]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Admission />
      <Clubs />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component to scroll to top */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
