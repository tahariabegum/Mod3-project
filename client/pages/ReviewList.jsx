import './Review.css'
import baseURL from '../src/Api'
import axios from 'axios'

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ReviewList({ username }) {

    const navigate = useNavigate()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await axios.get(baseURL + `/api/reviews`)
                const data = await response.json()
                setReviews(data)
            } catch (err) {
                console.log(err.message)
            }
        } 
        getReviews()
    }, [])

    const handleDelete = async(id) => {
        try {
            await fetch(`/api/reviews/${id}` , {
                method: 'DELETE'
            })
            setReviews(reviews.filter((review) => review._id !==id))
        } catch (err) {
            console.log(err.message)
        }
    }


    return (
        <div className='book-review-page'>
            <div className='review-title-cont'>
                <h1 className = 'review-title'> {username}'s Book Reviews </h1>
            </div>
            <button onClick={() => navigate('/reviews/new')} className='create-review-button'> + Create New Book Review</button>
            {reviews.map((review) => (
                <div key = {review._id} className = 'review-content'>
                    <Link to = {`/reviews/${review._id}`}>
                        <h2 className='review-list-title'> {review.title} </h2>
                    </Link>
                    <p> By: {review.author} </p>
                    <p className = 'stars'> {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)} </p>
                    <div className = 'review-buttons'>
                        <button onClick = {() => navigate(`/reviews/${review._id}/edit`)} className='review-button'> Edit </button>
                        <button onClick = {() => handleDelete(review._id)} className='review-button'> Delete </button>
                    </div>  
                </div>
            ))}
        </div>
    )
}