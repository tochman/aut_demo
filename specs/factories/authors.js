module.exports = (factory, Models) => {
  factory.define('Author', Models.Author, {
    firstName: 'Lucas',
    lastName: 'Knudsen',
    createdAt: new Date(),
    updatedAt: new Date()
  })
}