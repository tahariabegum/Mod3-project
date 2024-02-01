const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const reviewSchema = new Schema ({
    title: { type: String, required: true },
    user: { type: String },
    author: [{ type: String, required: true }], 
    genre: { type: String , required: true },
    pages: { type: Number, required: true },
    rating: { type: Number, required: true},
    review: { type: String, required: true}, 
}, { timestamps: true } )

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review