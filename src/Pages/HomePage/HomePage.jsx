import React, { useState, useEffect } from "react"
import "./HomePage.css"
import Subject from '../../Components/Subject/Subject'
import { Link } from 'react-router-dom'
import { data } from '../../data'

export default function HomePage() {
    const [subjects, setSubjects] = useState(Object.keys(data))
    
    return (
        <div className="subjects">
            {subjects.map(subject => <Link className="subjects-link" to={`/Learn/${subject}`}><Subject 
                                        description={data[subject].description} 
                                        title={subject} 
                                        img={data[subject].img} 
                                        alt={data[subject].alt}
                                    /></Link>)}
        </div>
    )

}