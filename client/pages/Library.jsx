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

    const handleDelete = async(id) => {
        try {
            await fetch(`/api/library/${id}` , {
                method: 'DELETE'
            })
            setBooks(books.filter((book) => book._id !==id))
        } catch (err) {
            console.log(err.message)
        }
    }
    
    return(
        <div className = 'book-data'>
            <h1 className = 'lib-title'> {username}'s Library </h1>
            <div>
                {books.map(book => (
                    <div key = {book._id} className='book-cont'>
                        <img src = {book.thumbnail} alt = {book.title} className = 'book-img'/>
                        <div className = 'book-det'>
                            <a href = {book.previewLink} >
                                <h2> {book.title} </h2>
                            </a>
                            <p> {book.authors} </p>
                            <p> {book.description} </p>
                            <button onClick = {() => handleDelete(book._id)} className='delete-button'> Delete </button>  
                        </div>
                    </div>   
                ))}
            </div>
            
        </div>
    )
}