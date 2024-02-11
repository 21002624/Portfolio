import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';

function App() {


  return (
    <>
    <Navbar />
    <div className='container'>
      <Hero />
      <Skills />
    </div>
    
    </>
  );
}

export default App;
