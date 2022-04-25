import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
                <NavLink exact to="/" activeClassName="header-link-active" className="header-link">Home</NavLink>
                <NavLink to="/Learn" activeClassName="header-link-active" className="header-link">Learn</NavLink>
                <NavLink exact to="/Contact" activeClassName="header-link-active" className="header-link">Contact</NavLink>
        </header>
    )
}