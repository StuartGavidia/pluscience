import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header">
            <h1>Welcome to PLU Science!</h1>
            <NavLink to="/Learn">Learn</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </header>
    )
}