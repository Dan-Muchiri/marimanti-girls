import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import About from './components/About/About';
import Admission from './components/Admission/Admission';
import Clubs from './components/Clubs/Clubs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css'

function App() {
 

  return (
    <>
     <Router>
      <Header/>
      <Hero/>
      <About/>
      <Admission/>
      <Clubs/>
      <Contact/>
      <Footer/>
    </Router> 
    </>
  )
}

export default App
