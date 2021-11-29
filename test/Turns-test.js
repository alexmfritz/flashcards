const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/card');

describe('Turn', () => {

  it('should be a function', () => {
    const turn = Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });


});