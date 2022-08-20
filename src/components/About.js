import React from 'react'

import './About.css'

// import the icons for the links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, } from '@fortawesome/free-brands-svg-icons'
// envelope icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-title">
                    <h1 className='about-h1'>About Me</h1>
                </div>
                <div className="about-description">
                    <p>
                        I am a 20 year old student from Cheshire UK studying Computer Science at Lancaster University. 
                        I have a passion for web development and Blockchain technology and I am currently working on my final year project, 
                        consensus protocols for next generation blockchain systems. In my spare time I like to make digital art, and learn new technologies.
                    </p>
                </div>
                <div className="links-title">
                    <h2 className='links-h2'>Links</h2>
                </div>
                <div className="links">
                    <div className="link">
                        <a href="http://github.com/lewisheath">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </div>
                    <div className="link">
                        <a href="http://linkedin.com/in/lewis-heath-490034200">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                    <div className="link">
                        <a href="http://instagram.com/lewisheathart">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                    <div className="link">
                        <a href="mailto:email@lewisheath.co.uk">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About