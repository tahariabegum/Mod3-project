const Book = require ('../models/bookModel')
const mongoose = require('mongoose')

const addBookToLibrary = async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(200).json(book)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    addBookToLibrary
}