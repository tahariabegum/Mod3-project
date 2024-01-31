const express = require ('express')
const router = express.Router()
const reviewController = require('../controllers/reviewControllers')

// Get all reviews 
router.get('/', reviewController.getAllReviews)

// Create new review 
router.post('/', reviewController.newReview)

// Get specific(id) review 
router.get('/:id', reviewController.getReviewDetail)

// Delete review 
router.delete('/:id', reviewController.deleteReview)

// Update review
router.put('/:id', reviewController.updateReview)

// Edit review 
router.get('/:id/edit', reviewController.editReview)



module.exports = router 