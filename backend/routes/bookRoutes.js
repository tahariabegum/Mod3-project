const express = require ('express')
const router = express.Router()
const bookControllers = require ('../controllers/bookControllers')


router.post('/', bookControllers.addBookToLibrary)

// Get all books
router.get('/', bookControllers.getAllBooks)

module.exports = router 