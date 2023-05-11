import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_31a94pt', 'template_0tjn67u', form.current, 'etb87t55Fz0ovgBoQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5> Get In Touch </h5>
      <h2> Contact Me</h2> 

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
             <MdOutlineEmail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>jasonosmond2001@gmail.com</h5>
             <a href='mailto:jasonosmond2001@gmail.com' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
             <BsLinkedin className='contact__option-icon'/>
             <h4>LinkedIn</h4>
             <h5>JasonOsmond</h5>
             <a href='https://www.linkedin.com/in/jasonosmond/' target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} className='contact__form' onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Nanme" required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact