const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  it('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a.instanceOf(Deck);
  });

  it('should be able to contain cards', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], 'object');
    const card5 = new Card(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', ["mutator method", "accessor method", "iteration method"], 'iteration method');
    const card22 = new Card(22, 'Which prototype method is used to iterate over each property of an object?', ["Object.keys()", "Object.values()", "reduce()"], 'Object.keys()');

    const deck = new Deck([deck1, deck5, deck22]);

    expect(deck.cards).to.deep.equal([
      {
        id: 1,
        question: "What allows you to define a set of related information using key-value pairs?",
        answers: ["object", "array", "function"],
        correctAnswer: "object"
      }, {
        id: 5,
        question: "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
        answers: ["mutator method", "accessor method", "iteration method"],
        correctAnswer: "iteration method"
      }, {
        id: 22,
        question: "Which prototype method is used to iterate over each property of an object?",
        answers: ["Object.keys()", "Object.values()", "reduce()"],
        correctAnswer: "Object.keys()"
      }]);


  });
})