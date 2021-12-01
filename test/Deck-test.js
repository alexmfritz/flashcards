const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');

describe('Deck', () => {
  data.prototypeData.forEach(card => cards.push(new Card(card.id, card.question, card.answers, card.correctAnswer)));
  let deck;
  let cards = [];

  beforeEach( () => {

    deck = new Deck(cards);
  });
  
  it('should be a function', () => {

    expect(deck).to.be.a.instanceOf(Deck);
  });

  it('should be able to contain cards', () => {

    expect(deck.cards).to.equal([]);
  });

  it('should be able to count how many cards are in the deck', () => {
 
    expect(deck.countCards()).to.deep.equal(30);
  });
});