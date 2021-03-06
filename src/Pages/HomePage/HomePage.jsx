import React from "react"
import "./HomePage.css"
import Subject from '../../Components/Subject/Subject'
import { Link } from 'react-router-dom'
import { data } from '../../data'

export default function HomePage({darkMode}) {

    const subjects = Object.keys(data)
    
    return (
        <div className={darkMode ? "dark-subjects" : "subjects"}>
            {subjects.map((subject, i) => <Link className="subjects-link" to={`/Learn/${subject}`} key={i}><Subject 
                                        description={data[subject].description} 
                                        title={subject} 
                                        img={data[subject].img} 
                                        alt={data[subject].alt}
                                    /></Link>)}
        </div>
    )

}