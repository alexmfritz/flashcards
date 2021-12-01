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
    this.turns++;
    this.currentCard = this.deck.cards[this.turns - 1];
    let turn = new Turn(guess, this.currentCard);

    if (!turn.evaluateGuess()) {
      let id = this.currentCard.id
      this.incorrectGuesses.push(id);
    }
    return turn.giveFeedback();
  }

  calculatePercentageCorrect() {
    let totalCorrect = this.turns - this.incorrectGuesses.length;
    return (totalCorrect / this.turns) * 100;
  }

  endRound() {
    console.log('** Round over! ** You answered <>% of the questions correctly');
  }
}

module.exports = Round;