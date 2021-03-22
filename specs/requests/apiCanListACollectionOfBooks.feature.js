const app = require('../../app')
const supertest = require('supertest')
const expect = require('chai').expect
// const { factory } = require('../helpers')

let server, request, response

before(done => {
  server = app.listen(done)
  request = supertest.agent(server)
});

after(done => {
  server.close(done)
});


describe.only('GET /api/books', () => {
  beforeEach(async () => {
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
});