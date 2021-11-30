class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  returnGuess = () => {
    return this.guess;
  }

  returnCard = () => {
    return this.currentCard;
  }

  evaluateGuess = () => {
    switch (this.guess) {
      case this.currentCard.correctAnswer:
        return true;
      default:
        return false;
    }
  }

  giveFeedback = () => {
    if (this.evaluateGuess()) {
      return 'correct!';
    }
      return 'incorrect!';
  }
}

module.exports = Turn;