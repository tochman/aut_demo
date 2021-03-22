const booksController = {
  index(request, response) {
    response.send({ books: [] })
  }
}


module.exports = booksController