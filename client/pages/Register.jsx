import axios from 'axios'
// import customAxiosAndBaseURL from '../src/Api'

import { useState } from 'react' 
import { useNavigate } from 'react-router-dom'

let emptyForm = {
    username: '', 
    password: '',
    email: ''
}

export default function Register ({ setUser }) {

    const navigate = useNavigate() 

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm ({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            
            const response = await axios.post('/auth/register', form)
            console.log(response)
            const token = response.data?.token 

            if (token) {

                localStorage.setItem('token', token)
            
                const userResponse = await axios.get('/api/users', {
                    headers: {
                        Authorization: token
                    }
                })

                setUser(userResponse.data) 

                navigate('/profile')

            } else {

                setForm(emptyForm)
                return

            }

        } catch (err) {
            console.log(err.message)
            console.log(err.response.data.error)
            alert(err.response.data.error)
        }
    }

    return ( 
        <div className = "register-page">
            <h1 className = "register-title"> Register </h1>

            <form className = "register-form" onSubmit = {handleSubmit}>

                <label htmlFor = "username"> Username: </label>

                <input 
                    type = "text" 
                    id = "username"
                    name = "username"
                    onChange = {handleChange} 
                    value = {form.username}
                />
                <br/>
                <label htmlFor = "email"> Email: </label>
                <input 
                    type = "email" 
                    id = "email"
                    name = "email"
                    onChange = {handleChange} 
                    value = {form.email}
                />

                <br/> 

                <label htmlFor = "password"> Password: </label>

                <input 
                    type = "password" 
                    id = "password"
                    name = "password"
                    onChange = {handleChange} 
                    value = {form.password}
                />

                <br/>  

                <button> Submit </button>
            </form>
            <p className='login-here'> Have an account? <a href = '/login'> Login Here </a></p>   
        </div>
    )
}