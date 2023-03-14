"use strict";

// Global Variables
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber)
const displayMessage = (message) => document.querySelector('.message').textContent = message;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //   When there is no input
  if (!guess) {
    displayMessage("Please Enter a Number!!!");
  }
  //   When player Wins
  else if (guess === secretNumber) {
    displayMessage("Correct Number!!!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
  }
  //   When player guess does not matches
  else if ( guess !== secretNumber) {
    if (score > 1) {
        displayMessage(guess > secretNumber ? "Too High!!!" : "Too Low");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("You Lost the Game!!!");
        document.querySelector(".score").textContent = 0;
      }
  }
  
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})