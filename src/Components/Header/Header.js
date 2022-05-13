import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

export default function Header({toggleDark, darkMode}) {

    return (
        <header className="header">
                <div className="header-darkMode" onClick={toggleDark}>
                    {!darkMode &&
                    <div className="header-darkMode-off">
                        <img src="/Assets/Images/lightmode.webp" alt="The sun representing light mode"/>
                    </div>
                    }
                    {darkMode &&
                    <div className="header-darkMode-on">
                        <img src="/Assets/Images/darkmode.webp" alt="A half moon representing dark mode"/>
                    </div>
                    }
                </div>
                <nav className={darkMode ? "dark-header-nav" : "header-nav"}>
                    <NavLink exact to="/" activeClassName={darkMode ? "dark-header-link-active" : "header-link-active"} className={darkMode ? "dark-header-link" : "header-link"}>Home</NavLink>
                    <NavLink to="/Learn" activeClassName={darkMode ? "dark-header-link-active" : "header-link-active"} className={darkMode ? "dark-header-link" : "header-link"}>Learn</NavLink>
                    <NavLink exact to="/Contact" activeClassName={darkMode ? "dark-header-link-active" : "header-link-active"} className={darkMode ? "dark-header-link" : "header-link"}>Contact</NavLink>
                </nav>
                
        </header>
    )
}