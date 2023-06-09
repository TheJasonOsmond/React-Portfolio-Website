import React from 'react'
import CV from '../../assets/Jason Osmond Resume 2023.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'> Let's Talk</a>
    </div>
  )
}

export default CTA