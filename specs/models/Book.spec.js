const { expect, factory } = require('../helpers')
const { Association, DataTypes } = require('sequelize')

describe.only('Book', () => {
  let subject, attributes

  beforeEach(async () => {
    BookModel = factory.factories.Book.Model
    subject = await factory.create('Book')
  });

  describe('Model', () => {
    beforeEach(async () => {
      attributes = BookModel.tableAttributes
      associations = BookModel.associations
      tableName = BookModel.tableName
    });

    it('is expected to have a table name "Books"', () => {
      expect(tableName).to.equal('Books')
    });

    describe('is expected to have property:', () => {
      it('title:string', () => {
        expect(attributes)
          .to.haveOwnProperty('title')
          .that.has.property('type').to.be.instanceOf(DataTypes.STRING)
      });

      it('createdAt:date', () => {
        expect(attributes)
          .to.haveOwnProperty('createdAt')
          .that.has.property('type').to.be.instanceOf(DataTypes.DATE)
      });

      it('updatedAt:date', () => {
        expect(attributes)
          .to.haveOwnProperty('updatedAt')
          .that.has.property('type').to.be.instanceOf(DataTypes.DATE)
      });

    });

    describe('is expected to have have associations', () => {
      it('Author:BelongsTo', () => {
        expect(associations)
          .to.haveOwnProperty('author')
          .to.be.instanceOf(Association.BelongsTo)
          .that.has.property('foreignKey', 'authorId')
      });
    });


  });

  describe('Instance', () => {
    describe('is expected to have have association accessors', () => {
      it('for Author association', () => {
        expect(subject)
          .to.respondTo('setAuthor')
          .and.respondTo('getAuthor')
          .and.respondTo('createAuthor')
      });
    });
  });


  it('is expected to have a valid factory', () => {
    expect(subject).to.include({
      title: 'Whatever'
    })
  });

});