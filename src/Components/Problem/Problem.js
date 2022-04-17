import React, { useState, useEffect } from 'react'
import Choice from '../Choice/Choice'
import "./Problem.css"

export default function Problem({problem}){

    const [submit, setSubmit] = useState(false)

    const [choices, setChoices] = useState([])
    useEffect(() => {
        setChoices(problem.choices.map(((choice, i) => {
            return {
                choice: choice,
                selected: false,
                id: i,
            }
        })))
        setSubmit(false)
    }, [problem.choices])

    function toggleSelected(id){
        setChoices(prev => {
            return prev.map(current => {
                if(current.id === id){
                    return {...current, selected: true}
                } else {
                    return {...current, selected: false}
                }
            })
        })
    }

    function handleSubmit(){
        setSubmit(true)
    }

    return (
        <div className="problem">
            <h2 className="problem-title">Problem {problem.problem}</h2>
            <h3 className="problem-question">{problem.question}</h3>
            {choices.map(choice => <Choice choice={choice} toggleSelected={toggleSelected} submitted={submit} correct={problem.correct}/>)}
            <button className="problem-button" type="submit" onClick={handleSubmit}>Check Answer</button>
        </div>
    )
}