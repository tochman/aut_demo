const { Book, Author } = require('../models')

const booksController = {
  async index(request, response) {
    const books = await Book.findAll({
      include: 'author',
      attributes: ['title']

    })
    response.send({ books: books })
  }
}


module.exports = booksController