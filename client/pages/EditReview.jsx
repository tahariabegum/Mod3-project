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
            const response = await fetch (`/api/reviews/${id}`, {
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
        <div className = 'edit-page'>
            <h2 className = 'edit-title'> Edit Book Review </h2>
            <form className= 'edit-form' onSubmit = {handleSubmit}>

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
                <button type = "submit"> Update Review </button>
            </form>
        </div>
    )
}