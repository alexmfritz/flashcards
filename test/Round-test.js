const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turns');
const Round = require('../src/Round');

describe('Round', () => {

  it('should be a function', () => {

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round = new Round();

    expect(round).to.be.an.instanceOf(Round);
  });

  it('should be able to hold a deck of cards', () => {
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const card5 = new Card(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ["mutator method", "accessor method", "iteration method"], 'iteration method');
    const card22 = new Card(22, 'Which prototype method is used to iterate over each property of an object?', ["Object.keys()", "Object.values()", "reduce()"], 'Object.keys()');

    const deck = new Deck([card3, card5, card22]);

    const round = new Round(deck);

    expect(round.deck.length).to.equal(1);
  });

});