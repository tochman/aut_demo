'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Books', 'authorId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Authors',
        as: 'author',
        key: 'id'
      }
    })
  }
};
