import React from 'react'
import './Hero.css';
import ReactImage from '../Hero/image/react.png'; 
import userImage from '../Hero/image/user.jpg';
import htmlImage from '../Hero/image/html.png';
import cssImage from '../Hero/image/css.png';
import jsImage from  '../Hero/image/js.webp';
const Hero = () => {
  return (
    <section className='hero-container' id='hero'>
      <div className='hero-content'>
        <h2>Transforming Digital Experiences with Exquisite UI/UX Design</h2>
        <p>
        "Building tomorrow's digital world, one line at a time. Full Stack Developer, architecting seamless experiences."
        </p>
        
      </div>
      

      <div className='hero-img'>
        <div>
          <div className='tech-icon'>
          <img src={ReactImage}  className="react-icon" alt="React" /> {/* Use imported image variable */}
          </div>
          <img src={userImage}  className="user-img" alt="React" /> 
        </div>
        
          <div>
              <div>
                <div className='tech-icon'>
                  <img src={htmlImage}  className="react-icon" alt="React" /> 
                </div>
              </div>

              <div>
                <div className='tech-icon'>
                  <img src={cssImage}  className="react-icon" alt="React" /> 
                </div>
              </div>

              <div>
                <div className='tech-icon'>
                  <img src={jsImage}  className="react-icon" alt="React" /> 
                </div>
              </div>

          </div>


      </div>

      

    </section>
  )
}

export default Hero
