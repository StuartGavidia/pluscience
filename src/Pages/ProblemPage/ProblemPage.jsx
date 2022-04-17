import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../data'
import Problem from "../../Components/Problem/Problem"

export default function ProblemPage(){

    const {subject, unit} = useParams()

    const [practice, setPractice] = useState({})

    useEffect(() => {
        setPractice(() => {
            const value = data[subject].info.filter(currentUnit => currentUnit.nameLink === unit)
            return value[0].practiceProblems
        })
    }, [unit, subject])

    return (
        <div>
            <h2>Background</h2>
            <p>{practice.background}</p>
            {practice.problemsList ? practice.problemsList.map(problem => <Problem problem={problem}/>) : <p>Loading</p>}
            <h2>Conclusion</h2>
            <p>{practice.conclusion}</p>
        </div>
    )
}