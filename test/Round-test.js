const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/test-data');

describe('Round', () => {
  let deck;
  let round;
  let cards;

  beforeEach( () => {
    cards = data.testData.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    });
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

    expect(round.deck.cards.length).to.equal(4);
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
    round.takeTurn('blue and green');
    round.takeTurn('polar bear');

    expect(round.turns).to.deep.equal(2);
  });

  it('should be able to show the next card', () => {
    round.takeTurn('red and yellow');
    const returnedCard = round.returnCurrentCard();

    expect(returnedCard).to.deep.equal(round.currentCard);
  });

  it('should be able to evaluate incorrect guesses and store them', () => {
    round.takeTurn('red and yellow');
    round.takeTurn('purple and pink');

    expect(round.incorrectGuesses.length).to.deep.equal(2);
  });

  it('should be able to give feedback if correct', () => {
    const correctAnswer = round.takeTurn('blue and green');

    expect(correctAnswer).to.deep.equal('correct!');
  });

  it('should be able to give feedback if incorrect', () => {
    const wrongAnswer = round.takeTurn('red and yellow');

    expect(wrongAnswer).to.deep.equal('incorrect!');
  });

  it('should be able to calculate the percentage of correct answers', () => {
    round.takeTurn('blue and green');
    round.takeTurn('octopus');
    round.takeTurn('April');
    round.takeTurn('Lauren');

    expect(round.incorrectGuesses).to.deep.equal([3]);
    expect(round.turns).to.deep.equal(4);
    expect(round.calculatePercentageCorrect()).to.equal(75)
  });

  it('should notify the player when the round is over', () => {
    round.takeTurn('blue and green');
    round.takeTurn('octopus');
    round.takeTurn('April');
    round.takeTurn('Lauren');

    expect(round.endRound()).to.deep.equal('** Round over! ** You answered 75% of the questions correctly');
  });
});