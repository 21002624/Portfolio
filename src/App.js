import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {

  useEffect(() => {
    document.title = "Akash's portfolio"; // Set the title dynamically
  }, []);

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
