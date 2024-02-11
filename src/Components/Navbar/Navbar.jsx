import React, { useState } from 'react';


import './Navbar.css';
import MobileNav from '../MobileNav/MobileNav';

const Navbar = () => {

    const [openMenu ,setOpenMenu] =useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    };

    
  return (
    <>

        <MobileNav isOpen={openMenu} toggleMenu ={toggleMenu} />


        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <div className='name'>
                    <h2> I'M AKASH</h2>
                </div>
                
            

                <ul>
                    <li>
                        <a className="custom-btn btn-2" href='#hero'>Home</a>
                    </li>
                    <li>
                        <a className="custom-btn btn-2" href='#skills'>Skills</a>
                    </li>
                    <li>
                        <a className="custom-btn btn-2" href='#work'>Work</a>
                    </li>
                    <li>
                        <a className="custom-btn btn-2" href='#contact-me'>Hire</a>
                    </li>
                    <li>
                        <a className="custom-btn btn-2" href='https://github.com/21002624' target="_blank" rel="noreferrer" >Github</a>
                    </li>

                    {/* <button class="ui-btn" onclick="https://github.com/21002624" ><span> Github </span> </button> */}
                </ul>

                <button className='menu-btn' onClick={toggleMenu}>
                    <span className={"material-symbols-outlined"} 
                    style={{fontSize :"1.8rem"}}>  
                    {openMenu ? "close" : "menu"} 
                    </span>
                    {/* <span class={"material-symbols-outlined"} style={{fontSize :"1.8rem"}}> menu</span> */}
                </button>

            </div>
        </nav>
    </>
  )
}

export default Navbar
