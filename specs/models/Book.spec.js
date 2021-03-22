const expect = require('chai').expect
const { factory } = require('../helpers')
const proxyquire = require('proxyquire')
const sinon = require('sinon')
const {
  sequelize,
  Sequelize,
  dataTypes: DataTypes
} = require('sequelize-test-helpers')

describe('Book', () => {
  class Model { }
  Model.init = sinon.spy()
  const mockedSequelize = { Model, DataTypes }

  const Book = proxyquire('../../models/book', { sequelize: mockedSequelize })

  let subject, DescribedModel

  before(() => {
    DescribedModel = Book(sequelize)
  });

  after(() => {
    DescribedModel.init.resetHistory()
  })

  it('is expected to call Book.init with correct parameters', () => {
    expect(DescribedModel.init).to.have.been.calledWith(
      {
        title: DataTypes.STRING
      },
      {
        sequelize,
        modelName: 'Book',
      }
    )
  });

});