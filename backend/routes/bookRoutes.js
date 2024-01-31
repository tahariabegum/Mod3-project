const express = require ('express')
const router = express.Router()
const bookControllers = require ('../controllers/bookControllers')


router.post('/library', bookControllers.addBookToLibrary)

module.exports = router 