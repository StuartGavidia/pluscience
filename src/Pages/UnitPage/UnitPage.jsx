import React, { useEffect, useState } from 'react'
import "./UnitPage.css"
import { useParams, Link } from 'react-router-dom'
import Unit from '../../Components/Unit/Unit'
import { data } from "../../data"

export default function UnitPage() {

    const { subject } = useParams()

    const [units, setUnits] = useState([])
    useEffect(() => {
        setUnits(data[subject].info)
    }, [subject])

    return (
        <div className="unitPage">
            {units.map(currentUnit => <Link to={`/Learn/Chem/${currentUnit.nameLink}`}><Unit 
                                        unit={currentUnit.unit} 
                                        name={currentUnit.name}
                                        bio={currentUnit.bio}
                                        img={currentUnit.img}
                                        alt={currentUnit.alt}
                                                    /></Link>)}
        </div>
    )
}