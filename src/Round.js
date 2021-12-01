const Turn = require('./Turns');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[this.turns];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    let turn = new Turn(guess, this.currentCard);

    if (!turn.evaluateGuess()) {
      this.currentGuesses.push(this.currentCard.id);
    }
    
    return turn.provideFeedback();
  }

  calculatePercentageCorrect() {
    let totalCorrect = this.turns - this.incorrectGuesses.length;
    return (totalCorrect / this.turns) * 100;
  }
}

module.exports = Round;