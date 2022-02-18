import React from 'react'
import './Project.css'

function Project({ name, description, link, image }) {
  return (
      <a href={link} className='project-link'>
        <div className='project'>
            <img src={image} alt="" />
            <div className='project-details'>
                <div className='project-name'>
                    <p>{name}</p>
                </div>
                <div className='project-description'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
      </a>
  )
}

export default Project