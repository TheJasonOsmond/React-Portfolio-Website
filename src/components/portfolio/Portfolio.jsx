import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio/react-website.JPG'
import IMG2 from '../../assets/portfolio/coursez.JPG'
import IMG3 from '../../assets/portfolio/portfolio1.jpg'
import IMG4 from '../../assets/portfolio/portfolio1.jpg'
import IMG5 from '../../assets/portfolio/portfolio1.jpg'
import IMG6 from '../../assets/portfolio/portfolio1.jpg'
import {BsGithub} from 'react-icons/bs'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {/* REACT PORTFOLIO WEBSITE */}
        <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>React Portfolio Website</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 

            <div className='portfolio__item-cta'>
            <a href='https://github.com/TheJasonOsmond/React-Portfolio-Website' className='btn' target='_blank'>  
            <BsGithub className='portfolio__item-cta-icon'/> GitHub 
            </a>
              <a href='https://jasonosmond.com' className='btn btn-primary' target='_blank'>View Project</a>
            </div>
          </div>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
        </article>
        {/* COURSEZ */}
        <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>CoursEZ: Course Registration System</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 

            <div className='portfolio__item-cta'>
            <a href='https://github.com/jayzk/CPSC481_FinalProject' className='btn' target='_blank'>  
            <BsGithub className='portfolio__item-cta-icon'/> GitHub 
            </a>
              <a href='https://youtu.be/3UYKqa73vsM' className='btn btn-primary' target='_blank'>View Project</a>
            </div>
          </div>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
        </article>
        {/* CLASSMATE */}
        <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>CoursEZ: Course Registration System</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 

            <div className='portfolio__item-cta'>
            <a href='https://github.com/jayzk/CPSC481_FinalProject' className='btn' target='_blank'>  
            <BsGithub className='portfolio__item-cta-icon'/> GitHub 
            </a>
              <a href='https://youtu.be/3UYKqa73vsM' className='btn btn-primary' target='_blank'>View Project</a>
            </div>
          </div>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
        </article>
        {/* CHECKOUT SOFTWARE */}
        <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>CoursEZ: Course Registration System</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 

            <div className='portfolio__item-cta'>
            <a href='https://github.com/jayzk/CPSC481_FinalProject' className='btn' target='_blank'>  
            <BsGithub className='portfolio__item-cta-icon'/> GitHub 
            </a>
              <a href='https://youtu.be/3UYKqa73vsM' className='btn btn-primary' target='_blank'>View Project</a>
            </div>
          </div>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
        </article>
        {/* ECOROUTE */}
        <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>CoursEZ: Course Registration System</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 

            <div className='portfolio__item-cta'>
            <a href='https://github.com/jayzk/CPSC481_FinalProject' className='btn' target='_blank'>  
            <BsGithub className='portfolio__item-cta-icon'/> GitHub 
            </a>
              <a href='https://youtu.be/3UYKqa73vsM' className='btn btn-primary' target='_blank'>View Project</a>
            </div>
          </div>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio