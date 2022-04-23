import React, { useState } from 'react'
import "./ContactPage.css"
import ContactForm from '../../Components/ContactForm/ContactForm'

export default function ContactPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    return (
        <ContactForm 
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            description={description}
            setDescription={setDescription}
        />
    )
}