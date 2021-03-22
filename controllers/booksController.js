const { Book } = require('../models')
const booksController = {
  async index(request, response) {
    const books = await Book.findAll()
    response.send({ books: books })
  }
}


module.exports = booksController