

import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

let emptyForm = {
    username: '',
    password: ''
}

export default function Login ({ setUser }) {

    const navigate = useNavigate()
    
    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm ({ ...form, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault 
    }


    return (
        <div className = "login-page" > 
            <h1 className = 'login-title' > Login </h1>
            <form  className = "login-form" onSubmit = {handleSubmit}>

                <label htmlFor = "username"> Username: </label>

                <br />

                <input
                    type = "text" 
                    id = "username"
                    name = "username"
                    onChange = {handleChange} 
                    value = {form.username}
                />

                <br/> <br/>

                <label htmlFor = "password"> Password: </label>

                <br />

                <input 
                    type = "password" 
                    id = "password"
                    name = "password"
                    onChange = {handleChange} 
                    value = {form.password}
                /> 

                <br/> <br/>

                <button className = 'submit'> Submit </button>
                <p className='register-here'> Don't have an account? <a href = '/register'> Register Here </a></p>
            </form>
    
        </div>
    )
}

