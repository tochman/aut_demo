const { Book, Author } = require('../models')

const booksController = {
  async index(request, response) {
    const books = await Book.scope(['basicInfo']).findAll()
    response.send({ books: books })
  }
}


module.exports = booksController