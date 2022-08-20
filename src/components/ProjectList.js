import React from 'react'
import Project from './Project'
import './ProjectList.css'

import netflix from '../images/netflix.png'
import notes from '../images/notes.png'
import punk from '../images/punks.png'

function ProjectList() {
  return (
    <div className='projectList'>
        <div className='projectList-title'>
            <h1>Projects</h1>
        </div>
        <div className='projectList-container'>
            <Project name={"Netflix UI Clone"} description={"Created a netflix front end clone using react and tailwind css."} link={"https://zealous-booth-7f9816.netlify.app/"} image={netflix} technologies={['html', 'css', 'js', 'react']} /> 
            <Project name={"Note taking app"} description={"Created a note taking app that stores the notes to local storage"} link={"https://amazing-einstein-f54334.netlify.app/"} image={notes} technologies={['html', 'css', 'js', 'react']} /> 
            <Project name={"NFT viewer"} description={"An NFT viewer that gets the data from the ethereum testnet"} link={"https://6209673f3ef4290007ac035b--amazing-lamarr-dfa402.netlify.app/"} image={punk} technologies={['html', 'css', 'js', 'react']} /> 
            <Project name={"Netflix UI Clone"} description={"Created a netflix front end clone using react and tailwind css."} link={"https://zealous-booth-7f9816.netlify.app/"} image={netflix} technologies={['html', 'css', 'js', 'react']} /> 
            <Project name={"Note taking app"} description={"Created a note taking app that stores the notes to local storage"} link={"https://amazing-einstein-f54334.netlify.app/"} image={notes} technologies={['html', 'css', 'js', 'react']} /> 
            <Project name={"NFT viewer"} description={"An NFT viewer that gets the data from the ethereum testnet"} link={"https://6209673f3ef4290007ac035b--amazing-lamarr-dfa402.netlify.app/"} image={punk} technologies={['html', 'css', 'js', 'react']} /> 
            <Project name={"Netflix UI Clone"} description={"Created a netflix front end clone using react and tailwind css."} link={"https://zealous-booth-7f9816.netlify.app/"} image={netflix} technologies={['html', 'css', 'js', 'react']} /> 
            <Project name={"Note taking app"} description={"Created a note taking app that stores the notes to local storage"} link={"https://amazing-einstein-f54334.netlify.app/"} image={notes} technologies={['html', 'css', 'js', 'react']} /> 
            <Project name={"NFT viewer"} description={"An NFT viewer that gets the data from the ethereum testnet"} link={"https://6209673f3ef4290007ac035b--amazing-lamarr-dfa402.netlify.app/"} image={punk} technologies={['html', 'css', 'js', 'react']} /> 
        </div>
    </div>
  )
}

export default ProjectList