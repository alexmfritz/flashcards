class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    switch (this.guess) {
    case this.currentCard.correctAnswer:
      return true;
    default:
      return false;
    }
  }

  giveFeedback() {
    switch (this.evaluateGuess()) {
    case true:
      return 'correct!';
    default:
      return 'incorrect!'
    }
  }
}

module.exports = Turn;