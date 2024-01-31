import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ReviewList({ username }) {

    const navigate = useNavigate()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await fetch(`/api/reviews`)
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
            <h1> {username}'s Book Reviews </h1>
            <button onClick={() => navigate('/reviews/new')}>Create New Book Review</button>
            {reviews.map((review) => (
                <div key = {review._id}>
                    <Link to = {`/reviews/${review._id}`}>
                        <h2> {review.title} </h2>
                    </Link>
                    <p> By {review.author} </p>
                    <p> {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)} </p>
                    <button onClick = {() => handleDelete(review._id)}> Delete </button>
                </div>
            ))}
        </div>
    )
}