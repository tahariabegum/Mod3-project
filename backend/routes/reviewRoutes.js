const express = require ('express')
const router = express.Router()
const reviewController = require('../controllers/reviewControllers')

// Get all reviews 
router.get('/', reviewController.getAllReviews)

// Get specific(id) review 
router.get('/:id', reviewController.getReviewDetail)

// Create new review 
router.post('/', reviewController.newReview)

module.exports = router 