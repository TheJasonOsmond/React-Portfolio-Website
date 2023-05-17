import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio/react-website.JPG'
import IMG2 from '../../assets/portfolio/coursez.JPG'
import IMG3 from '../../assets/portfolio/classmate.JPG'
import IMG4 from '../../assets/portfolio/checkout.JPG'
import IMG5 from '../../assets/portfolio/cpsc329.png'
import IMG6 from '../../assets/portfolio/ecoroute.png'
import IMG7 from '../../assets/portfolio/benny-beaver.png'
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
            <h4>May 2023</h4>
            <p>
            While resumes are great, I thought why not also build a stunning website to showcase my abilities. So I did exactly that.
            </p> 
            <p>
            I hope by exploring this site, you can get a sense of who I am. I even included some hidden easter eggs. Try to find them!
            </p> 

            <div className='portfolio__item-cta'>
            <a href='https://github.com/TheJasonOsmond/React-Portfolio-Website' className='btn' target='_blank'>  
            <BsGithub className='portfolio__item-cta-icon'/> GitHub 
            </a>
              <a href='https://jasonosmond.com' className='btn btn-primary' target='_blank'>View Pro-...wait.</a>
            </div>
          </div>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
        </article>
        {/* CLASSMATE */}
        <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>ClassMate: Schedule Sharing Tool</h3>
            <h4>April 2023</h4>
            <p>
              The days of loneliness are over! With this tool, students can now coordinate courses and free time together. This means more smiles both inside and outside of class.  
            </p> 
            <p>
              See the courses your friends are taking, and add them to your own schedule. It's that easy! Want to coordinate free time with a student at another institution, that's fine, this app can support any institution across the globe.
            </p> 

            <div className='portfolio__item-cta'>
            <a href='https://github.com/jayzk/CPSC481_FinalProject' className='btn' target='_blank'>  
            <BsGithub className='portfolio__item-cta-icon'/> GitHub 
            </a>
            </div>
          </div>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
        </article>
        {/* COURSEZ */}
        <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>CoursEZ: Course Registration System</h3>
            <h4>April 2023</h4>
            <p>
            {/* “Design is in everything we make, but it’s also between those things. It’s a mix of craft, science, storytelling, propaganda, and philosophy.” - Erik Edigard */}
            {/* “Socrates said, “Know thyself.” I say, “Know thy users.” And guess what? They don’t think like you do.” - Joshua Brewer */}
            “If we want users to like our software, we should design it to behave like a likeable person: respectful, generous and helpful.” — Alan Cooper
            </p> 
            <p>
              In this project, we focused on creating an excellent user experience. We concentrated on what the user's needed and delievered an evolutionary design that guides all types of users through course registration.
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
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>Self-Checkout Software</h3>
            <h4>December 2022</h4>
            <p>

            </p> 
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 

            <div className='portfolio__item-cta'>
            <a href='https://github.com/maxk4/seng300-Project3' className='btn' target='_blank'>  
            <BsGithub className='portfolio__item-cta-icon'/> GitHub 
            </a>
            </div>
          </div>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
        </article> */}
        {/* Cyber Security Learning Application */}
        <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>Cyber Security Learning Application</h3>
            <h4>December 2022</h4>
            <p>
             Cybersecurity is not just important for businesses but also for most areas of modern life.
            </p> 
            <p>
            With this crash course application, users learn from basic and advanced lessons on cybersecurity, providing an introduction to many topics, 
            including the basic principles of security and privacy, malware, and cryptography. 
            </p> 

            <div className='portfolio__item-cta'>
            <a href='https://github.com/mkrn52/CPSC_329_Final_Project' className='btn' target='_blank'>  
            <BsGithub className='portfolio__item-cta-icon'/> GitHub 
            </a>
            </div>
          </div>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
        </article>
        {/* ECOROUTE */}
        <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>EcoRoute</h3>
            <h4>February 2022</h4>
            <p>
              Did you know automobiles and light trucks account for about 11% of Canada's total greenhouse gas emissions?
            </p> 
            <p>
              Through this hackathon project, we wanted to provide Canadians a tool that would encourage using sustainable modes of transportation. Our approach was to create a tool to calculate time efficient transportation routes that prioritize sustainablilty. By itself it won't change the world, but it's a step in the right direction (pun intended).
            </p> 

            <div className='portfolio__item-cta'>
            <a href='https://github.com/sandonli/ecoRoute' className='btn' target='_blank'>  
            <BsGithub className='portfolio__item-cta-icon'/> GitHub 
            </a>
              <a href='https://devpost.com/software/eco-route' className='btn btn-primary' target='_blank'>View Project</a>
            </div>
          </div>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
        </article>
        {/* Benny Beaver */}
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>Benny Beaver</h3>
            <h4>February 2021</h4>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 

            <div className='portfolio__item-cta'>
            <a href='https://github.com/sandonli/BennyBeaver2010' className='btn' target='_blank'>  
            <BsGithub className='portfolio__item-cta-icon'/> GitHub 
            </a>
              <a href='https://devpost.com/software/bennybeaver2010' className='btn btn-primary' target='_blank'>View Project</a>
            </div>
          </div>
          <div className='portfolio__item-image'>
            <img src={IMG7} alt="" />
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio