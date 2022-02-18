import React from 'react'
import './Header.css'
import logo from '../images/logo.png'

function Header() {
  return (
    <div className="header">
        <div className="header-container">
            <div className="header-title">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <p>home()</p>
                <p>projects()</p>
            </div>
        </div>
    </div>
  )
}

export default Header