import './CreateReview.css'
import axios from 'axios'
import baseURL from '../src/Api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

let emptyForm = {
    title: '',
    author: '',
    genre: '',
    pages: '',
    rating: 0,
    review: ''
}

export default function EditReview() {

    const {id} = useParams()
    const navigate = useNavigate() 
    let [form, setForm] = useState(emptyForm)

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await fetch(`/api/reviews/${id}`)
                const data = await response.json()
                setForm(data)
            } catch (err) {
                console.log(err.message)
            }
        } 
        getReviews()
    }, [])


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get (baseURL + `/api/reviews/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            navigate('/reviews')
        } catch (err) {
            console.log('Unable to update review: ', err.message)
        }
    }


    return (
        <div className = 'create-page'>
            <div className = 'create-title-cont'>
                <h2 className = 'create-title'> Edit Book Review </h2>
            </div>
            <form className= 'create-form' onSubmit = {handleSubmit}>
            <div className = 'groups'>
                <label> Book Title: </label>
                <input 
                    type = "text" 
                    name = "title"
                    onChange = {handleChange} 
                    value = {form.title}
                />
                
            </div>
            <div className = 'groups'>
                <label> Author: </label>
                <input 
                    type = "text" 
                    name = "author"
                    onChange = {handleChange} 
                    value = {form.author}
                />
                
            </div>
            
            <div className = 'groups'>

                <label> Genre: </label>
                <input 
                    type = "text" 
                    name = "genre"
                    onChange = {handleChange} 
                    value = {form.genre}
                />
                
            </div>
            <div className = 'groups'>
                <label> Pages: </label>
                <input 
                    type = "number" 
                    name = "pages"
                    onChange = {handleChange} 
                    value = {form.pages}
                />
                
            </div>
            <div className = 'groups'>
                <label> Rating: </label>
                <input 
                    type = "number" 
                    name = "rating"
                    onChange = {handleChange} 
                    value = {form.rating}
                    min='1' 
                    max='5'
                />
                
            </div>
            <div className = 'groups'>
                <label> Review: </label>
                <textarea
                    name = "review"
                    onChange = {handleChange} 
                    value = {form.review}
                >
                </textarea>
                <br/>
            </div>
            <div className='edit-buttons'>  
                <button onClick = {() => navigate('/reviews')} className = "cancel-button"> Cancel </button>
                <button type = "submit" className = "submit-button"> Update Review </button>
            </div>
            </form>
        </div>
    )
}