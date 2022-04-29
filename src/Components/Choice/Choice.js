import React from 'react'
import "./Choice.css"

export default function Choice({correct, submitted, choice, toggleSelected}) {

    let styles = {}
    if(submitted){
        styles = {backgroundColor: choice.choice === correct ? "lightgreen" : "#f22222"}
    } else {
        styles = {backgroundColor: choice.selected ? "lightgrey" : "white"}
    }

    function handleClick() {
        toggleSelected(choice.id)
    }

    return (
        <h4 onClick={handleClick} style={styles}>{choice.choice}</h4>
    )
}