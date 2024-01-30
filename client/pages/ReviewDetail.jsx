import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ReviewDetail({ username }) {
    const {id} = useParams()
    const [review, setReview] = useState({})

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
            <h2 className='review-title'> {review.title} </h2>
            <p> By: {username} </p>
            <p> Author: {review.author} </p>
            <p> Genre: {review.genre} </p>
            <p> Pages: {review.pages} </p>
            <p> Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
            <p> {review.review} </p>
        </div>
    )
}