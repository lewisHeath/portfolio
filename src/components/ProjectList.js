import React from 'react'
import Project from './Project'
import './ProjectList.css'

function ProjectList() {
  return (
    <div className='projectList'>
        <div className='projectList-title'>
            <h1>Projects()</h1>
        </div>
        <div className='projectList-container'>
            <Project /> 
            <Project /> 
            <Project /> 
            <Project /> 
        </div>
    </div>
  )
}

export default ProjectList