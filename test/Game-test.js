const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', () => {
  let game;

  beforeEach( () => {

    const game = new Game();
  });

  it('should be a function', () => {

    expect(Game).to.be('function');
  });

  it('should be an instance of Game', () => {

    expect(game).to.be.an.instanceOf(Game);
  })

});