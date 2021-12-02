# Mod 2 Solo Project #1: Flash-cards

## Project Overview:

The first Mod 2 Solo Project is a flash-card style game that is played inside of your Command-Line Interface (CLI). It was a partially completed project, with a boilerplate repository provided by Turing's Front-End Mod 2 instructors, and we were expected to complete the project according to these project [specs](https://frontend.turing.edu/projects/flash-cards.html). This was very similar to the class-to-class interaction work that we were challenged with during Mod 1 of the program, however this time we were expected to implement Test-Driven Development. This means we were expected to write a series of test-suites for the different aspects of the project in order to create a stronger codebase. We were expected to write the entire test-suite first and then create the source code in order to build out the game. 

## How to Play:

The user is asked a series of questions, each populated with either a 3-answer multiple-choice OR a truth or false answer set. The user may answer the provided questions by either the 1, 2, or 3 keys on the keyboard, or the up and down arrows, both of which are followed by the enter/return key. After the question is answered, the CLI will populate a statement informing them whether their answer is correct or incorrect! This process repeats until all 30 questions have been answered. At the end of the round of questions, the game will make an end statement with the percentage of correctly answered questions. 

![](https://media.giphy.com/media/cPRENZ9YvEMWGC9rk2/giphy.gif)

Following the Install Directions (found below), the user can run the ```node install.js``` command from within the main project directory. 

![](https://media.giphy.com/media/dbbHoUmH7gRobOpf1g/giphy.gif)

Continue playing through the series of questions by using the 1, 2, 3 keys or UP + DOWN arrows, followed by the return/enter button. Press the return/enter button again for the next question to appear. 

![](https://media.giphy.com/media/iJFDLrNixiQtaPRzlA/giphy.gif)

Upon finishing the game (30 questions in total), a message will prompt with your final score. You may exit the game by using the ```CNTRL + C``` command. Repeat the process to play again!

## Goals:

- Contribute code to an partially constructed object-oriented application
- Follow spec/prompts to make a working application
- Implement ES6 classes
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD

## Future Features:

- **New Questions:** Build out another study/flashcards dataset for a different series of questions
- **Timer:** At the end of the game, report how much time it took to complete the game (in minutes and seconds)
- **Report:** At the end of the game, create a report card that would detail any answers that the user got wrong as well as how many tries each question took

## Install Directions:

- Fork this project to your own Github account
- Clone the repository to your local machine
- cd into the project
- run ```npm install``` 
- Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 
- Begin editing however you'd like!

## Technologies:

- **Languages:** JavaScript, Mocha (JavaScript testing framework), Chai (assertion library)
- **Software:** VSCode, ESLint(grammar for JavaScript), Mac Terminal, GitHub, Giphy, Chrome

## Author/Links:

Alex Fritz
- [LinkedIn](https://www.linkedin.com/in/alexmfritz/)
- [GitHub](https://github.com/alexmfritz)
- [Project Repo](https://github.com/alexmfritz/flashcards)