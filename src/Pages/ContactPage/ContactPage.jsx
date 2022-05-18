import React, { useState } from 'react'
import "./ContactPage.css"
import ContactForm from '../../Components/ContactForm/ContactForm'

export default function ContactPage({darkMode}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className={darkMode ? "dark-contact" : "contact"}>
            <div className="note">
                <h3>"Note: This Contact Form does not work"</h3>
            </div>
            <ContactForm 
                darkMode={darkMode}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                description={description}
                setDescription={setDescription}
            />
        </div>
    )
}