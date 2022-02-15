import React from 'react'
import './Project.css'

function Project() {
  return (
    <div className='project'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAElBMVEX8/vz///8pKikAAAAtLS2Oj47hKWeDAAABEElEQVR4nO3PBxEDMRAAMZcLf8p5GuuRGGjdO+dhc9f97afNmr1ets86hm2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2GfYZ9hn2Gfd9w9ttm3Tkvm/sHIDIKk6RLvD4AAAAASUVORK5CYII=" alt="" />
        <div className='project-details'>
            <div className='project-name'>
                <p>Name</p>
            </div>
            <div className='project-description'>
                <p>Description</p>
            </div>
        </div>
    </div>
  )
}

export default Project