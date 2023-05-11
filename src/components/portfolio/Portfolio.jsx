import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/benny-beaver.png'
import IMG3 from '../../assets/portfolio1.jpg'
import IMG4 from '../../assets/portfolio1.jpg'
import IMG5 from '../../assets/portfolio1.jpg'
import IMG6 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-info'>
            <h3>Benny Beaver</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias odit qui, eum ducimus quia non officia sapiente rem accusamus? Quasi molestias, sunt quaerat esse veniam at ducimus minima debitis?
            </p> 
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, recusandae! Cum, temporibus! Praesentium accusamus voluptatum odio animi aliquam cupiditate debitis magnam! Dolorem minus earum quis veritatis iure, quas tempora quidem?
            </p> 
            <div className='portfolio__item-cta'>
              <a href='https://github.com' className='btn' target='_blank'> Github</a>
              <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
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