import React from 'react'
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import emailIcon from './images/email.png';
import github from './images/github.png'
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className='contact-container' id='contact-me'>
        <h5>conatct Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard 
                iconUrl={emailIcon}
                text={<a href="mailto:akasharul2407@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>akasharul2407@gmail.com</a>}
                />

                <ContactInfoCard 
                iconUrl={github}
                text={<a href="https://github.com/21002624" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }} >https://github.com/21002624</a>}
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe
