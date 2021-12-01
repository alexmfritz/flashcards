const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turns');
const Card = require('../src/Card');

describe('Turn', () => {
  let card;
  let turn;

  beforeEach( () => {
    
    card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    turn = new Turn('mutator method', card);
  });

  it('should be a function', () => {
    
    expect(turn).to.be.a.instanceOf(Turn);
  });

  it('should be able to store a player\'s guess', () => {

    expect(turn.guess).to.equal('mutator method');
  });

  it('should be able to store the current card', () => {

    expect(turn.currentCard).to.equal(card);
  });

  it('should be able to return the player\'s guess', () => {
    const returnedGuess = turn.returnGuess();

    expect(returnedGuess).to.equal('mutator method');
  });

  it('should be able to return the card', () => {
    const returnedCard = turn.returnCard();

    expect(returnedCard).to.equal(card);
  });

  it('should be able to evaluate the player\'s guess against the correct answer', () => {
    const wrongTurn = new Turn('iteration method', card);
    const rightTurn = new Turn('mutator method', card);

    const wrongAnswer = wrongTurn.evaluateGuess();
    const rightAnswer = rightTurn.evaluateGuess();

    expect(wrongAnswer).to.equal(false);
    expect(rightAnswer).to.equal(true);
  });

  it('should be able to give feedback to the player based on their answer', () => {
    const wrongTurn = new Turn('iteration method', card);
    const rightTurn = new Turn('mutator method', card);

    const wrongAnswer = wrongTurn.giveFeedback();
    const rightAnswer = rightTurn.giveFeedback();

    expect(wrongAnswer).to.equal('incorrect!');
    expect(rightAnswer).to.equal('correct!');
  });
});