const app = require('../../app')
const supertest = require('supertest')
const expect = require('chai').expect
const { factory } = require('../helpers')

let server, request, response

before(done => {
  server = app.listen(done)
  request = supertest.agent(server)
});

after(done => {
  server.close(done)
});


describe('GET /api/books', () => {
  beforeEach(async () => {
    let lucas = await factory.create('Author')
    await factory.createMany('Book', 2, [
      { title: "Learn NodeJS", authorId: lucas.id },
      { title: "Learn Sequelize", authorId: lucas.id }
    ])
    response = await request.get('/api/books')
  });

  it('is expected to respond with status 200', () => {
    expect(response.status)
      .to.equal(200)
  });

  it('is expected to return a collection of Books', () => {
    expect(response.body)
      .to.have.property('books')
      .and.be.an('array')
  });

  it('is expected to return a collection of Books', () => {
    expect(response.body.books)
      .to.have.length(2)
  });

  it('is expected to include "Learn NodeJS"', () => {
    expect(response.body.books[0].title).to.equal("Learn NodeJS")
  });

  it.only('is expected to include author info', () => {
    
    expect(response.body.books[0])
      .to.have.own.property('author')
      .that.has.property('firstName', 'Lucas')
  });
});