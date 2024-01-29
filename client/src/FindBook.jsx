import './App.css'

import { useState, useEffect } from 'react'

export default function FindBook( {search} ) {
    const [data, setData] = useState([])
    const key = import.meta.env.VITE_KEY

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
                </div>
            </div>
    )
    )}
    </div>
)



}