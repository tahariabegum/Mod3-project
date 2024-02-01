const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const bookSchema = new Schema ({
    title: { type: String, required: true },
    authors: [String], 
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    previewLink: { type: String },
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book