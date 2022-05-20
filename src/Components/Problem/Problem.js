import React, { useState, useEffect } from 'react'
import Choice from '../Choice/Choice'
import ChemicalEquation from '../../helper/ChemicalEquation'
import "./Problem.css"

//chemical equation inserted

export default function Problem({problem, darkMode}){

    const [submit, setSubmit] = useState(false)

    const [showReferences, setShowReferences] = useState(false)

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
        setShowReferences(false)
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

    function toggleReferences(){
        setShowReferences(prev => !prev)
    }

    function handleSubmit(){
        setSubmit(true)
    }

    const dark = darkMode ? "dark" : ""

    return (
        <div className={showReferences ? `${dark}problem extend` : `${dark}problem`}>
            <h2 className="problem-title">Problem {problem.problem}</h2>
            <h3 className="problem-question">{ChemicalEquation(problem.question)}</h3>
            {problem.questionPartTwo && <h3 className="problem-question-partTwo">{ChemicalEquation(problem.questionPartTwo)}</h3>}
            {problem.questionPartThree && <h3 className="problem-question-partThree">{ChemicalEquation(problem.questionPartThree)}</h3>}
            {choices.map((choice, i) => <Choice key={i} choice={choice} toggleSelected={toggleSelected} submitted={submit} correct={problem.correct} />)}
            {submit ? <button className="problem-button"  onClick={toggleReferences}>References</button>
            : <button className="problem-button" type="submit" onClick={handleSubmit}>Check Answer</button>
            }
            {showReferences &&
            <div className="problem-references">
                <ul>
                    {problem.references.map(reference => {
                        return <li><a className="problem-references-reference" href={reference} target="_blank" rel="noreferrer noopener">{reference}</a></li>
                    })}
                </ul>
            </div>
            }
        </div>
    )
}