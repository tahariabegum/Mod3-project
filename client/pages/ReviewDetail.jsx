import './Review.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function ReviewDetail({ username }) {
    const {id} = useParams()
    const [review, setReview] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        const getReview = async() => {
            try {
                const response = await fetch (`/api/reviews/${id}`)
                const data = await response.json()
                setReview(data)
            } catch (err) {
                console.log(err.message)
            }
        }
        getReview()
    }, [])


    return (
        <div className = 'review-details'>
            <div>
                <h2 className='review-title'> {review.title} </h2>
                <p className = 'review-by'> By: {username} </p>
            </div>
            <div className = 'review-det'>
                <p> Author: {review.author} </p>
                <p> Genre: {review.genre} </p>
                <p> Pages: {review.pages} </p>
                <p className='review-rating'> Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                <p> {review.review} </p>
                <div>
                    <button onClick = {() => navigate('/reviews')}className='back-button'> Back </button>
                </div>
            </div>
        </div>
    )
}