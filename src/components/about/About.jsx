import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className='about__content'>
          {/* <div className='about__cards'> 
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experience </h5>
              <small> 0 Years Working </small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5> Clients </h5>
              <small> 0 Worldwide </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5> Projects </h5>
              <small> 20+ Completed </small>
            </article>
          </div> */}

          <p>
            Hey there! I'm a passionate software developer who loves to learn. Computer science has captured my curiosity with its vast possibilities and the chance to continuously explore new technologies. Through this journey, I've not only sharpened my technical skills but also developed strong communication and leadership abilities, thanks to the incredible community surrounding it.
          </p>
          <p>
            From memorable hackathon experiences to challenging long-term projects, I cherish the opportunities, friendships, and memories that computer science has brought me. I'm dedicated to constantly expanding my knowledge and expertise in order to make a positive impact on both the community and real-world challenges affecting people worldwide.
            </p>
          <p>
            When I'm not engrossed in coding, you can find me conquering new heights on the bouldering wall, shooting hoops on the basketball court, or unwinding with a captivating book or show.
          </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>   
    </section>
  )
}

export default About