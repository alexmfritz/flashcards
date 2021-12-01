const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');

describe('Card', () => {
  let card;

  beforeEach( () => {
    card = new Card(1, 'What are Alex\'s favorite colors?', ['red and yellow', 'blue and green', 'purple and pink'], 'blue and green');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should have an id', () => {
    expect(card.id).to.equal(1);
  });

  it('should store a question', () => {
    expect(card.question).to.equal('What are Alex\'s favorite colors?');
  });  

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['red and yellow', 'blue and green', 'purple and pink']);
  });  

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('blue and green');
  });
});