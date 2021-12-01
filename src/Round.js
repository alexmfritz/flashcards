const Turn = require('./Turns');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[this.turns];
  }
}

module.exports = Round;