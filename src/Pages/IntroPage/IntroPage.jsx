import React from 'react'
import "./IntroPage.css"

export default function IntroPage(){
    return (
        <div className="intro">
            <div className="intro-banner">
                <div className="intro-banner-text">
                    <h1>PLU Learn</h1>
                    <h2>Start Learning in the Learn Page</h2>
                    <p>This site is not affiliated with PLU but offers practice problems to solve for anyone.</p>
                </div>
            </div>
            <div className="intro-information">
                <h1>Future Updates</h1>
                <div>
                    <ul>
                        <li>Adding other subjects</li>
                        <li>Adding Functionality to Contact Page</li>
                        <li>Add own sections to practice problems</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}