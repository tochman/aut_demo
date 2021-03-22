module.exports = (factory, Models) => {
  factory.define('Book', Models.Book, {
    title: 'Whatever',
    createdAt: new Date(),
    updatedAt: new Date()
  })
}