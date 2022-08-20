import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-container'>
            <div className='hero-title'>
                <h1 className='actual-title'>Lewis Heath</h1>
            </div>
            <div className='hero-description'>
                <p>
                    Student studying Computer Science at Lancaster University,
                    with a passion for web development and Blockchain technology.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero