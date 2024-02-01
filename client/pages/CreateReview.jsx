import './CreateReview.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

let emptyForm = {
    title: '',
    author: '',
    genre: '',
    pages: '',
    rating: 0,
    review: ''
}

export default function CreateReview ({ username }) {

    const navigate = useNavigate() 

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch ('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            navigate('/reviews')
        } catch (err) {
            console.log('Unable to create review: ', err.message)
        }
    }

    return (
        <div className = 'create-page'>
            <div className ='create-title-cont'>
                <h2 className='create-title'> Create New Book Review </h2>
            </div>
            <form className= 'create-form' onSubmit = {handleSubmit}>

                <label> Book Title: 
                <input 
                    type = "text" 
                    name = "title"
                    onChange = {handleChange} 
                    value = {form.title}
                />
                </label>

                <label> Author: 
                <input 
                    type = "text" 
                    name = "author"
                    onChange = {handleChange} 
                    value = {form.author}
                />
                </label>

                <label> Genre: 
                <input 
                    type = "text" 
                    name = "genre"
                    onChange = {handleChange} 
                    value = {form.genre}
                />
                </label>

                <label> Pages: 
                <input 
                    type = "number" 
                    name = "pages"
                    onChange = {handleChange} 
                    value = {form.pages}
                />
                </label>

                <label> Rating: 
                <input 
                    type = "number" 
                    name = "rating"
                    onChange = {handleChange} 
                    value = {form.rating}
                    min='1' 
                    max='5'
                />
                </label>

                <label> Review: 
                <textarea
                    name = "review"
                    onChange = {handleChange} 
                    value = {form.review}
                >
                </textarea>
                </label>
                <br/>
                <button type = "submit"> Submit Review </button>
            </form>
        </div>
    )
}