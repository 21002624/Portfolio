import React from 'react'
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className='name-container'>
                <input type='text' name='firstname' placeholder='first name' />
                <input type='text' name='lastname' placeholder='Last name' />
            </div>

            <input type='text' name='email' placeholder='Email' />
            <textarea type='text' name='message' placeholder='message' />

            <button >SEND</button>
        </form>
    </div>
  )
}

export default ContactForm
