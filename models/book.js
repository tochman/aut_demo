'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Author }) {
      Book.belongsTo(Author, { as: 'author' })
    }
  };
  Book.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });

  Book.addScope('basicInfo', {
    include: 'author',
    attributes: ['id', 'title']
  })
  return Book;
};