import React, { useCallback, useState } from 'react';
import './styles.css'

function ContactForm() {
    const [form, setFormData] = useState({ name: "", email: "", message: "" })
    const [submit, setSubmit] = useState(true)
    const [errors,setErrors] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        const validationState = validate()
        if (Object.keys(validationState).length > 0) {
            setErrors(validationState)
        } else {
        setSubmit(!submit)
        }
    }
    const validate = () => {
        const Errors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.name.trim()) Errors.name = "Name is required"
        if (!form.email.trim()) {
            Errors.email = "Email is required"
        } else if (!emailRegex.test(form.email)) {
            Errors.email = "Invalid email format"
        }
        if(!form.message.trim()) Errors.message = 'Message is required'
        return Errors
        
    }
    const resetForm = () => {
        setSubmit(!submit)
        setFormData({ name: "", email: "", message: "" })
    }
    return (
        <div >
            {submit ? <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    required
                    type='text'
                    value={form.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
                {errors.name && <p>{errors.name}</p>}
                <label>Email: </label>
                <input
                    required
                    type='text'
                    value={form.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
                {errors.email && <p>{errors.email}</p>}
                <label>Message:</label>
                <textarea
                    required
                    type='text'
                    value={form.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} />
                <button type='submit'>Submit</button>
            </form> : <><
                h1>"Thank you, {form.name}"</h1>
                <button onClick={()=>resetForm()}>Reset Form</button>
            </>}
        </div>
    );
}

export default ContactForm;