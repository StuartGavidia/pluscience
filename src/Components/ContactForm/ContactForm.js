import React from 'react'
import './ContactForm.css'
import { useState, useEffect } from 'react'


export default function ContactForm({darkMode, name, setName, email, setEmail, description, setDescription}){

    const [results, setResults] = useState({})

    useEffect(() => {

        // send email
        if(!(Object.keys(results).length === 0)){

            window.Email.send({
                Host : "smtp.elasticemail.com",
                Username : "gavidisa@plu.edu",
                Password : process.env.REACT_APP_KEY,
                To : 'gavidisa@plu.edu',
                From : 'gavidisa@plu.edu',
                Subject : 'name:' + results.name + ' email:' + results.description,
                Body : results.description
            }).then(
              message => alert(message)
            );

        }
        console.log(results)


    }, [results])

    function handleSubmit(e){

        e.preventDefault();


        setResults(
                    {
                        name: name,
                        email: email,
                        description: description
                    })

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
                        required
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