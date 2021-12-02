const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/test-data');

describe('Deck', () => {
  let cards;
  let deck;
  
  beforeEach( () => {
    cards = data.testData.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    deck = new Deck(cards);
  });
  
  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.a.instanceOf(Deck);
  });

  it('should be able to contain cards', () => {
    expect(deck.cards.length).to.equal(4);
  });

  it('should be able to count how many cards are in the deck', () => {
    const totalCards = deck.countCards();
    expect(totalCards).to.deep.equal(4);
  });
});