import React, { useState, useEffect } from 'react'
import Choice from '../Choice/Choice'

export default function Problem({problem}){
    //problem
    //question
    //choices
    //correct

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
    }, [])

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
        <div>
            <h2>Problem {problem.problem}</h2>
            <h3>{problem.question}</h3>
            {choices.map(choice => <Choice choice={choice} toggleSelected={toggleSelected} submitted={submit} correct={problem.correct}/>)}
            <button type="submit" onClick={handleSubmit}>Submit Answer</button>
        </div>
    )
}