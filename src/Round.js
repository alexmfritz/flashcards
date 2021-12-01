const Turn = require('./Turns');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[0];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    if (!turn.evaluateGuess()) {
      let id = this.currentCard.id
      this.incorrectGuesses.push(id);
    }

    this.turns++;
    this.currentCard = this.deck.cards[this.turns];

    return turn.giveFeedback();
  }

  calculatePercentageCorrect() {
    let totalCorrect = this.turns - this.incorrectGuesses.length;
    let percentCorrect = (totalCorrect / this.turns) * 100
    return percentCorrect;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly`);
    return `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly`;
  }
}

module.exports = Round;