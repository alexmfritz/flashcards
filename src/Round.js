const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = deck.cards[0];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard);
    switch (this.currentTurn.evaluateGuess()) {
    case false:
      this.incorrectGuesses.push(this.currentCard.id);
    }

    this.turns++;
    this.currentCard = this.deck.cards[this.turns];

    return this.currentTurn.giveFeedback();
  }

  calculatePercentageCorrect() {
    let totalCorrect = this.turns - this.incorrectGuesses.length;
    let percentCorrect = (totalCorrect / this.turns) * 100;
    return percentCorrect;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly`);
    return `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly`;
  }
}

module.exports = Round;