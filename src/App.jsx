import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
function App() {
  return (
    <>
      <NavBar />
      <div className="img-placeholder">
        <Hero />
      </div>
      <About />
      <Features />
    </>
  )
}

export default App