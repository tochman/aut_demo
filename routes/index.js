const express = require('express')
const router = express.Router()
const resourceController = require('../controllers/resourceController')
const booksController = require('../controllers/booksController')

/* Create routes for each controller in your application. */
router
  .get('/resource', resourceController.index)
  .get('/books', booksController.index )

module.exports = router
