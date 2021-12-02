const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turns');
const Card = require('../src/Card');

describe('Turn', () => {
  let card1;
  let card2;
  let turn1;
  let turn2;

  beforeEach( () => {
    card1 = new Card(1, 'What are Alex\'s favorite colors?', ['red and yellow', 'blue and green', 'purple and pink'], 'blue and green');
    card2 = new Card(2, 'What is Alex\'s favorite animal?', ['octopus', 'polar bear', 'lion'], 'octopus');
    turn1 = new Turn('blue and green', card1);
    turn2 = new Turn('red and yellow', card2);
  });

  it('should be a function', () => { 
    expect(turn1).to.be.a.instanceOf(Turn);
    expect(turn2).to.be.a.instanceOf(Turn);
  });

  it('should be able to store a player\'s guess', () => {
    expect(turn1.guess).to.deep.equal('blue and green');
    expect(turn2.guess).to.deep.equal('red and yellow');
  });

  it('should be able to store the current card', () => {
    expect(turn1.currentCard).to.deep.equal(card1);
    expect(turn2.currentCard).to.deep.equal(card2);
  });

  it('should be able to return the player\'s guess', () => {
    const returnedGuess1 = turn1.returnGuess();
    const returnedGuess2 = turn2.returnGuess();

    expect(returnedGuess1).to.deep.equal('blue and green');
    expect(returnedGuess2).to.deep.equal('red and yellow');
  });

  it('should be able to return the card', () => {
    const returnedCard1 = turn1.returnCard();
    const returnedCard2 = turn2.returnCard();

    expect(returnedCard1).to.deep.equal(card1);
    expect(returnedCard2).to.deep.equal(card2);
  });

  it('should be able to evaluate the player\'s guess against the correct answer', () => {
    const rightAnswer = turn1.evaluateGuess();
    const wrongAnswer = turn2.evaluateGuess();

    expect(rightAnswer).to.deep.equal(true);
    expect(wrongAnswer).to.deep.equal(false);
  });

  it('should be able to give feedback to the player based on their answer', () => {
    const rightAnswer = turn1.giveFeedback();
    const wrongAnswer = turn2.giveFeedback();

    expect(rightAnswer).to.deep.equal('correct!');
    expect(wrongAnswer).to.deep.equal('incorrect!');
  });
});