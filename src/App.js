import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';


function App() {


  return (
    <>
    <Navbar />
    <div className='container'>
      <Hero />
      <Skills />
      <WorkExperience />
      <ContactMe />
      <Footer />
    </div>
    
    </>
  );
}

export default App;
