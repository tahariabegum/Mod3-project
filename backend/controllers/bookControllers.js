const Book = require ('../models/bookModel')
const mongoose = require('mongoose')

// Add book to Library 
const addBookToLibrary = async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(200).json(book)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// Get all Books 
const getAllBooks = async (req, res) => {
    try {
    const books = await Book.find().sort({ createdAt: -1 })
    res.status(200).json(books)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// Delete Book from Library 
const deleteBook = async (req,res) => {
    try {
        const book = await Book.findByIdAndDelete({ _id: req.params.id })
        res.json({ message: "Book successfully deleted"})
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


module.exports = {
    addBookToLibrary,
    getAllBooks,
    deleteBook
}