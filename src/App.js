import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {


  return (
    <>
    <Navbar />
    <div className='container'>
      <Hero />
    </div>
    
    </>
  );
}

export default App;
