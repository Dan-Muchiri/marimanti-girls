import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import About from './components/About/About';
import Admission from './components/Admission/Admission';
import Clubs from './components/Clubs/Clubs';
import Departments from './components/Departments/Departments';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Admission />
      <Clubs />
      <Departments />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
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
