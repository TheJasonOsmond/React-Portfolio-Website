import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <header>
      <div className=".container.header__container">
        <h5>Hello I'm</h5>
        <h1>Jason Osmond</h1>
        <h5 className='text-light'> Fullstack Developer </h5>
        <CTA/>
        <HeaderSocials/>
      </div>

      <div className='me'>
        <img src={ME} alt="" />
      </div>

      <a href='#contact' className='scroll_down'> Scroll Down</a>
    </header>
  )
}

export default Header