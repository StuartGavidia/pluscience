import React from 'react'
import "./Subject.css"

export default function Subject({title, description, img, alt}){
    return (
        <div className="subject">
            <img className="subject-img" src={img} alt={alt}/>
            <h1 className="subject-title">{title}</h1>
            <p className="subject-description">{description}</p>
        </div>
    )
}