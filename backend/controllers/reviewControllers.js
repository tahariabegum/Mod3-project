const Review = require ('../models/reviewModel')
const mongoose = require('mongoose')

// Index (Get all Reviews)
const getAllReviews = async (req, res) => {
    try {
    const reviews = await Review.find().sort({ createdAt: -1 })
    res.status(200).json(reviews)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// Get Specific Review 
const getReviewDetail = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id)
        res.status(200).json(review)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// New (Create New Entry)
const newReview = async (req, res) => {
    const { title, user, author, genre, format, pages, rating, review } = req.body
    try {
        const newReview = await Review.create({ title, user, author, genre, pages, rating, review })
        res.status(200).json(newReview)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// Delete Review Entry 
const deleteReview = async (req,res) => {
    try {
        const review = await Review.findByIdAndDelete({ _id: req.params.id })
        res.json({ message: "Review successfully deleted"})
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// Update Review Entry
const updateReview = async (req,res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, res.body)
        res.json({ message: "Review successfully updated", review})
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// Edit Review Entry 
const editReview = async (req,res) => {
    try {
        const review = await Review.findById({ _id: req.params.id })
        res.status(400).json(review)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


module.exports = {
    getAllReviews,
    getReviewDetail,
    newReview, 
    deleteReview, 
    editReview,
    updateReview
}

