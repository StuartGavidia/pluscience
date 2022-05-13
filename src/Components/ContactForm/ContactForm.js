import React from 'react'
import './ContactForm.css'
import { useState } from 'react'


export default function ContactForm({darkMode, name, setName, email, setEmail, description, setDescription}){

    const [results, setResults] = useState([])

    function handleSubmit(e){

        e.preventDefault();

        setResults(prev => {
            return [...prev,
                    {
                        name: name,
                        email: email,
                        description: description
            }]
        })

        //Note modify to send to my email
        //first results wont print on first console because setResults is asynchronous
        console.log(results)

        setName("")
        setEmail("")
        setDescription("")
    } 

    function checkFilled(){
        if(name.length === 0 || email.length === 0 || description.length === 0){
            return true
        } else {
            return false
        }
    }
    return (
        <div className={darkMode ? "dark-contact-form" : "contact-form"}>
            <div className={darkMode ? "dark-contact-form-header" : "contact-form-header"}>
                <h1>Contact Us</h1>
            </div>
            <div className="contact-form-container">
                <form className="form">
                    <input 
                        type="text" 
                        value={name} 
                        className="form-input" 
                        id="name" 
                        placeholder="Name"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <br/>
                    <input 
                        type="email" 
                        value={email} 
                        className="form-input" 
                        id="email" 
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <br/>
                    <textarea 
                        id="description" 
                        value={description} 
                        rows="7" 
                        cols="40" 
                        placeholder="Description"
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    ></textarea>
                    <br/>
                    <button className={checkFilled() ? "form-submit-nonactive" : "form-submit-active"} type="submit" onClick={handleSubmit} disabled={checkFilled()}>Send</button>
                </form>
            </div>
        </div>
    )
}