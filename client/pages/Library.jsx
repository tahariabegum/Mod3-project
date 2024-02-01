import './Library.css'

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
        <div className = 'lib-data'>
            <div className = 'lib-title-cont'>
                <h1 className = 'lib-title'> {username}'s Library </h1>
            </div>
                {books.map(book => (
                    <div key = {book._id} className='lib-cont'>
                        <img src = {book.thumbnail} alt = {book.title} className = 'book-img'/>
                        <div className = 'lib-det'>
                            <a href = {book.previewLink} >
                                <h2 className='book-title'> {book.title} </h2>
                            </a>
                            <p> {book.authors} </p>
                            {/* <p> {book.description} </p> */}
                        <div className = 'lib-buttons'>
                            <button onClick = {() => handleDelete(book._id)} className='delete-button'> Delete </button> 
                            <button className='review-button'> Review Book </button> 
                        </div> 
                        </div>
                    </div>   
                ))}
            </div>
            
       
    )
}