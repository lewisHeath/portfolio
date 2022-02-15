import React from 'react'
import './Project.css'

function Project() {
  return (
    <div className='project'>
        <img src="https://techcrunch.com/wp-content/uploads/2021/12/FC3_itGXEAA6z5g.jpg?w=1024" alt="" />
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