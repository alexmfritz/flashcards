const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = request('../src/data');

describe('Round', () => {
  data.prototypeData.forEach(card => cards.push(new Card(card.id, card.question, card.answers, card.correctAnswer)));
  let deck;
  let round;
  let cards = [];

  beforeEach( () => {

    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', () => {

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {

    expect(round).to.be.an.instanceOf(Round);
  });

  it('should be able to hold a deck of cards', () => {

    expect(round.deck.length).to.equal(30);
  });

  it('should be able to return the current card', () => {
    const returnedCard = round.returnCurrentCard();

    expect(returnedCard).to.be.an.instanceOf(Card);
    expect(returnedCard.id).to.deep.equal(1);
    expect(returnedCard).to.deep.equal(round.currentCard);
  });

  it('should keep track of turns, starting at 0', () => {

    expect(round.turns).to.deep.equal(0);
  });

  it('should keep track of incorrect player guesses, starting with none', () => {

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to take a turn, updating the turn count', () => {
    round.takeTurn('accessor method');
    round.takeTurn('mutator method');

    expect(round.turns).to.deep.equal(2);
  });

  it('should be able to show the next card', () => {
    round.takeTurn('mutator method');

    expect(round.currentCard).to.deep.equal(round.currentCard);
  });

  it('should be able to evaluate incorrect guesses and store them', () => {
    round.takeTurn('accessor method');
    round.takeTurn('mutator method');

    expect(round.incorrectGuesses.length).to.deep.equal(2);
  });

  it('should be able to give feedback if correct', () => {
    const correctAnswer = round.takeTurn('mutator method');

    expect(correctAnswer).to.deep.equal('correct!');
  });

  it('should be able to give feedback if incorrect', () => {
    const wrongAnswer = round.takeTurn('iteration method');

    expect(wrongAnswer).to.deep.equal('incorrect!');
  });

  it('should be able to calculate the percentage of correct answers', () => {
    round.takeTurn('mutator method');
    round.takeTurn('accessor method');
    round.takeTurn('Object.values()');
    round.takeTurn('true');

    expect(round.incorrectGuesses).to.deep.equal([5, 9]);
    expect(round.turns).to.deep.equal(4);
    expect(round.calculatePercentageCorrect()).to.equal(50)
  });

  it('should notify the player when the round is over', () => {
    round.takeTurn('mutator method');
    round.takeTurn('iteration method');
    round.takeTurn('Object.keys()');

    expect(round.turns).to.deep.equal(3);
    expect(round.endRound()).to.equal('** Round over! ** You answered <>% of the questions correctly');
  });
});