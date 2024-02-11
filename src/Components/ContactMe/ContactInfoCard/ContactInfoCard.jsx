import React from 'react'
import './ContactInfoCard.css';

const ContactInfoCard = ({iconUrl , text}) => {
  return (
    <div className='contact-details-cards'>
        <div className='icon'>
            <img src={iconUrl} alt={text} />
        </div>

        <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard
