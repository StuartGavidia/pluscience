import React, { useState } from 'react'
import "./ContactPage.css"
import ContactForm from '../../Components/ContactForm/ContactForm'

export default function ContactPage({darkMode}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className={darkMode ? "dark-contact" : "contact"}>
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