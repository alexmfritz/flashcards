const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

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

  it('should be able to store the current card', () => {
    const card = new Card(3, "What type of prototype method directly modifies the existing array?", 
    ["mutator method", "accessor method", "iteration method"], "mutator method");

    const turn = new Turn('mutator method', card);

    expect(turn.currentCard).to.equal(card);
  });

  it('should be able to return the player\'s guess', () => {
    const card = new Card(3, "What type of prototype method directly modifies the existing array?", 
    ["mutator method", "accessor method", "iteration method"], "mutator method");
    const turn = new Turn('mutator method', card);

    const returnedGuess = turn.returnGuess();

    expect(returnedGuess).to.equal('mutator method');
  });

  it('should be able to return the card', () => {
    const card = new Card(3, "What type of prototype method directly modifies the existing array?", 
    ["mutator method", "accessor method", "iteration method"], "mutator method");

    const turn = new Turn('mutator method', card);

    const returnedCard = turn.returnCard();

    expect(returnedCard).to.equal(card);
  });

  it('should be able to evaluate the player\'s guess against the correct answer', () => {
    const card = new Card(3, "What type of prototype method directly modifies the existing array?", 
    ["mutator method", "accessor method", "iteration method"], "mutator method");

    const wrongTurn = new Turn('iteration method', card);
    const rightTurn = new Turn('mutator method', card);

    const wrongAnswer = wrongTurn.evaluateGuess();
    const rightAnswer = rightTurn.evaluateGuess();

    expect(wrongAnswer).to.equal(false);
    expect(rightAnswer).to.equal(true);
  });

  

});