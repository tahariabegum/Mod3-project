import './App.css'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FindBook( {search} ) {
    const [data, setData] = useState([])
    const key = import.meta.env.VITE_KEY
    const navigate = useNavigate()

    useEffect (() => {
    
        async function findBook() {

            try {
                const response = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${key}`)
                const data = await response.json()
                setData(data.items)

            } catch (err) {
                console.log(err)
            }

        }

    if (search) {
        findBook();
    }
    }, [search])


    const addBookToLibrary = async(book) => {
        try {
            const response = await fetch('/api/library', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    description: book.volumeInfo.description,
                    thumbnail: book.volumeInfo.imageLinks.thumbnail,
                    previewLink: book.volumeInfo.previewLink
                })
            })
            const data = await response.json()
            console.log("Book added: ", data)
            navigate('/library')
        } catch (err) {
            console.log(err)
        }
    }

return (
    <div className='book-data'>
        {data?.map((items) => (
            <div key = {items.id} className = 'book-cont'> 
             <img src = {items.volumeInfo?.imageLinks?.thumbnail} alt={items.volumeInfo?.title} className = 'book-img'/>
                <div className = 'book-det'>
                    <a href = {items.volumeInfo?.previewLink}>
                        <h2> {items.volumeInfo?.title}</h2>
                    </a>
                    <h3> {items.volumeInfo?.authors}</h3>
                    <p> {items.volumeInfo?.description}</p>
                    <button onClick = {() => addBookToLibrary(items)}> Add to Library </button>
                </div>
            </div>
    )
    )}
    </div>
)



}