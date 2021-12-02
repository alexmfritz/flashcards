const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', () => {
  let game;

  beforeEach( () => {
    game = new Game();
    game.start();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should be able to keep track of the current round', () => {
    expect(game).to.have.a.property('currentRound');
  });

  it('should be able to create new cards', () => {
    expect(game).to.have.a.property('deck');
  });

  it('should be able to create a new round', () => {
    expect(game).to.have.a.property('round');
  });

  it('should be able to put cards in the deck', () => {
    expect(game.deck.cards).to.deep.equal(prototypeQuestions);
  });

  it('should be able update the current round', () => {
    expect(game.currentRound).to.deep.equal(game.round);  
  });
});