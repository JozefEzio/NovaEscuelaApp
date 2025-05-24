import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <NavBar />
      <div className="img-placeholder">
        <Hero />
      </div>
      <About />
      <Features />
      <Testimonials />
    </>
  )
}

export default App