
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');
const util = require('./util');
const data = require('./data');

class Game {
  constructor() {
    this.currentRound = undefined;

  }

  start() {
    let cards = data.prototypeData.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    });
    this.deck = new Deck(cards);
    this.round = new Round(this.deck);
    this.currentRound = this.round;
    this.printMessage(this.deck);
    this.printQuestion(this.round);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.`);
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;