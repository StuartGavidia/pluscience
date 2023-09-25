import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

export default function Header({toggleDark, darkMode}) {

    return (
        <header className="header">
                <div className="header-darkMode" onClick={toggleDark}>
                    {!darkMode &&
                    <div className="header-darkMode-off">
                        <img src={process.env.PUBLIC_URL + "/Assets/Images/lightmode.webp"} alt="The sun representing light mode"/>
                    </div>
                    }
                    {darkMode &&
                    <div className="header-darkMode-on">
                        <img src={process.env.PUBLIC_URL + "/Assets/Images/darkmode.webp"} alt="A half moon representing dark mode"/>
                    </div>
                    }
                </div>
                <nav className={darkMode ? "dark-header-nav links" : "header-nav links"}>
                    <NavLink exact to="/" activeClassName={darkMode ? "dark-header-link-active" : "header-link-active"} className={darkMode ? "dark-header-link desktop-link" : "header-link desktop-link"}>Home</NavLink>
                    <NavLink to="/Learn" activeClassName={darkMode ? "dark-header-link-active" : "header-link-active"} className={darkMode ? "dark-header-link desktop-link" : "header-link desktop-link"}>Learn</NavLink>
                    <NavLink exact to="/Contact" activeClassName={darkMode ? "dark-header-link-active" : "header-link-active"} className={darkMode ? "dark-header-link desktop-link" : "header-link desktop-link"}>Contact</NavLink>
                    
                    <NavLink exact to="/" activeClassName="mobile-active" className="mobile-link"><img className="link-img" src="/Assets/Images/home-icon.png" alt="house icon"/></NavLink>
                    <NavLink to="/Learn" activeClassName="mobile-active" className="mobile-link"><img className="link-img" src="/Assets/Images/learn-icon.png" alt="person reading a book icon"/></NavLink>
                    <NavLink exact to="/Contact" activeClassName="mobile-active" className="mobile-link"><img className="link-img"src="/Assets/Images/contact-icon.png" alt="email icon"/></NavLink>
                </nav>
                    
                
        </header>
    )
}