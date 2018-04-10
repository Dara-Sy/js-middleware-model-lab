/* eslint-env mocha */
const chai = require('chai');
const dog = require('../dog');

const { expect } = chai;

describe('dog model', () => {
  it('should be an object', () => {
    expect(dog).to.be.an('object');
  });

  it('should have the correct methods', () => {
    expect(dog).to.respondTo('findAll');
    expect(dog).to.respondTo('findOne');
    expect(dog).to.respondTo('makeOne');
    expect(dog).to.respondTo('save');
    expect(dog).to.respondTo('destroy');
  });

  describe('#findAll', () => {
    // we should be able to get 50 dogs.
    it('should retrieve 344 records', async () => {
      const results = await dog.findAll();
      expect(results).to.have.length(50);
    });
  });
});
