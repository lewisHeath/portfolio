import React from 'react'
import './Project.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faReact, faNodeJs, faJsSquare, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'

const icons = {
    python: faPython,
    react: faReact,
    node: faNodeJs,
    js: faJsSquare,
    html: faHtml5,
    css: faCss3
}

function Project({ name, description, link, image, technologies }) {
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
                <div className="language-icons">
                    {technologies.map(technology => (
                        <div className="icon">
                            <FontAwesomeIcon icon={icons[technology]} key={technology} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </a>
  )
}

export default Project