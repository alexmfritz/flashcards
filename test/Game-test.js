const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', () => {
  let game;

  beforeEach( () => {

    game = new Game();
  });

  it('should be a function', () => {

    expect(Game).to.be('function');
  });

  it('should be an instance of Game', () => {

    expect(game).to.be.an.instanceOf(Game);
  });

  it('should be able to keep track of the current round', () => {

    expect(game.currentRound).to.exist;
  });

  it('should be able to create new cards', () => {
    game.start();

    expect(game.deck.cards).to.exist;
  });

  it('should be able to put cards in the deck', () => {
    game.start();

    expect(game.deck.cards).to.deep.equal(prototypeQuestions);
  });

  it('should be able update the current round', () => {
    game.start();

    expect(game.currentRound).to.deep.equal(game.round);  
  });
});