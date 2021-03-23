const { expect, factory } = require('../helpers')

describe.only('Book', () => {
  let subject

  beforeEach(async () => {
    debugger
    subject = await factory.create('Book')
  });


  it('is expected to have a valid factory', () => {

    expect(subject).to.include({
      title: 'Whatever',
    })
  });

});