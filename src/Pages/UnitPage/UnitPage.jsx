import React, { useEffect, useState } from 'react'
import "./UnitPage.css"
import { useParams, Link } from 'react-router-dom'
import Unit from '../../Components/Unit/Unit'
import { data } from "../../data"

export default function UnitPage({darkMode}) {

    const { subject } = useParams()

    const [units, setUnits] = useState([])
    useEffect(() => {
        setUnits(data[subject].info)
    }, [subject])

    return (
        <div className={darkMode ? "dark-unitPage" : "unitPage"}>
            {units.map((currentUnit, i) => <Link className="unitPage-unit" to={`/Learn/Chem/${currentUnit.nameLink}/section1`} key={i}><Unit 
                                        unit={currentUnit.unit} 
                                        name={currentUnit.name}
                                        bio={currentUnit.bio}
                                        img={currentUnit.img}
                                        alt={currentUnit.alt}
                                                    /></Link>)}
        </div>
    )
}