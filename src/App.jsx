import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import About from './components/About/About';
import Admission from './components/Admission/Admission';
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
      <Contact/>
      <Footer/>
    </Router> 
    </>
  )
}

export default App
