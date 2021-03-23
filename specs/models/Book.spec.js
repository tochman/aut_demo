const { expect, factory } = require('../helpers')
const { DataTypes } = require('sequelize')

describe('Book', () => {
  BookModel = factory.factories.Book.Model
  const { tableName, tableAttributes } = BookModel

  beforeEach(async () => {
    subject = await factory.create('Book')
  });

  describe.only('Model', () => {
    it('is expected to have a valid factory', () => {
      expect(subject).to.include({
        title: 'Whatever'
      })
    });

    it('is expected to have table name "Books', () => {
      expect(tableName).to.equal('Books')
    });

    describe('is expected to have property:', () => {

      it('title:string', () => {
        expect(tableAttributes)
          .to.have.own.property('title')
          .that.has.property('type').to.be.instanceOf(DataTypes.STRING)
      });

      it('createdAt:string', () => {
        expect(tableAttributes)
          .to.have.own.property('createdAt')
          .that.has.property('type').to.be.instanceOf(DataTypes.DATE)
      });

      it('updatedAt:string', () => {
        expect(tableAttributes)
          .to.have.own.property('updatedAt')
          .that.has.property('type').to.be.instanceOf(DataTypes.DATE)
      });

    });
  });

  describe('Instance', () => {

  });
});