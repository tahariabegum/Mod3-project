import { useState, useEffect } from 'react'

export default function Library ( { username} ) {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBook= async() => {
            try {
                const response = await fetch (`/api/library`)
                const data = await response.json()
                setBooks(data)
            } catch (err) {
                console.log(err.message)
            }
        }
        getBook()
    }, []) 
    
    return(
        <div className = 'book-data'>
            <h1> {username}'s Library </h1>
            <div>
                {books.map(book => (
                    <div key = {book._id}>
                        <img src = {book.thumbnail} alt = {book.title} />
                        <div>
                            <a href = {book.previewLink} >
                            <h2> {book.title} </h2>
                            </a>
                            <p> {book.authors} </p>
                            <p> {book.description} </p>
                        </div>
                    </div>   
                ))}
            </div>
        </div>
    )
}