import React, { useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { data } from '../../data'
import Problem from "../../Components/Problem/Problem"
import './ProblemPage.css'

export default function ProblemPage({darkMode}){

    const {subject, unit, section} = useParams()
    let history = useHistory();

    const [practice, setPractice] = useState({})

    useEffect(() => {
        setPractice(() => {
            const value = data[subject].info.filter(currentUnit => currentUnit.nameLink === unit)
            return value[0].practiceProblems
        })
    }, [unit, subject, section])

    let prev;
    section === "section1" ? prev = true : prev = false
    function handlePrev(){

        //modify the section varaible to be prev section
        let firstPart = section.substring(0, section.length - 1)
        let secondPart = parseInt(section.substring(section.length - 1)) - 1
        let updated = firstPart + secondPart

        history.push(`/Learn/${subject}/${unit}/${updated}`)
    }

    let next;
    section === "section3" ? next = true : next = false
    function handleNext(){

        //modify the section variable to be next section
        let firstPart = section.substring(0, section.length - 1)
        let secondPart = parseInt(section.substring(section.length - 1)) + 1
        let updated = firstPart + secondPart

        history.push(`/Learn/${subject}/${unit}/${updated}`)
    }


    return (
        <div className={darkMode ? "dark-problemPage" : "problemPage"}>
            { section === "section1" &&
                <div className={darkMode ? "dark-problemPage-background" : "problemPage-background"}>
                    <h2>Background</h2>
                    <p>{practice.background}</p>
                </div>
            }
            {practice.problemsList ? practice.problemsList[section].map((problem, i) => <Problem problem={problem} darkMode={darkMode} key={i}/>) : <p>Loading</p>}
            { section === "section3" &&
                <div className={darkMode ? "dark-problemPage-conclusion" : "problemPage-conclusion"}>
                    <h2>Conclusion</h2>
                    <p>{practice.conclusion}</p>
                </div>
            }
            <div className="problemPage-switch">
                <button className="button" onClick={handlePrev} disabled={prev}>Previous</button>
                <button className="button" onClick={handleNext} disabled={next}>Next</button>
            </div>
        </div>
    )
}