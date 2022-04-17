import React from 'react'
import "./Unit.css"

export default function Unit({unit, name, bio, img, alt}){
    return (
        <div className="unit">
            <img className="unit-img" src={img} alt={alt}/>
            <h1 className="unit-title mar">Unit {unit}</h1>
            <h2 className="unit-name mar">{name}</h2>
            <p className="unit-bio mar">{bio}</p>
        </div>
    )
}