const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/card');

describe('Turn', () => {

  it('should be a function', () => {
    const turn = Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should be able to store a player\'s guess', () => {
    const card = new Card(3, "What type of prototype method directly modifies the existing array?", 
    ["mutator method", "accessor method", "iteration method"], "mutator method");
    const turn = new Turn('mutator method', card);

    expect(turn.guess).to.equal('mutator method');
  });


});