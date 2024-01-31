const express = require ('express')
const router = express.Router()
const bookControllers = require ('../controllers/bookControllers')


router.post('/', bookControllers.addBookToLibrary)

module.exports = router 