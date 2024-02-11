import React from 'react'
import './MobileNav.css';

const MobileNav = ({isOpen , toggleMenu}) => {

    

  return (
    <>

        

        <div className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}>


            <div className='mobile-menu-container'>
                <img className='logo' src='./asserts/logo.webp' alt='' />
                <ul>
                <li>
                        <a class="custom-btn btn-2" href='#hero'>Home</a>
                    </li>
                    <li>
                        <a class="custom-btn btn-2" href='#skills'>Skills</a>
                    </li>
                    <li>
                        <a class="custom-btn btn-2" href='#work'>Work</a>
                    </li>
                    <li>
                        <a class="custom-btn btn-2" href='#contact-me'>Hire</a>
                    </li>

                    
                </ul>

                {/* <button class="ui-btn"><span> Github  </span></button> */}

            </div>
            
        </div>
    </>
  )
}

export default MobileNav
