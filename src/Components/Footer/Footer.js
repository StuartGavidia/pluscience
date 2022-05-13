import React from 'react'
import './Footer.css'

export default function Footer({darkMode}){
    return (
        <div className={darkMode ? "dark-footer" : "footer"}>
            <div className="footer-div">
                <h1>PLU Learn</h1>
            </div>
            <div className="footer-div">
                <h1>Enjoy!</h1>
            </div>
        </div>
    )
}