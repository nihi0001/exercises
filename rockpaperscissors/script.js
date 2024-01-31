//"use strict"

//document.querySelector("#player1").classList.add("shake")
//document.querySelector("#player2").classList.add("shake")

// Function to 
//const playGame = () => {
   // const rockBtn = document.querySelector('.rock');
   // const paperBtn = document.querySelector('.paper');
   // const scissorBtn = document.querySelector('.scissor');
   // const playerOptions = [rockBtn,paperBtn,scissorBtn];
    //const computerOptions = ['rock','paper','scissors']
//}

"use strict";

//document.querySelector("#player1").classList.add("shake");
//document.querySelector("#player2").classList.add("shake");

const computerOptions = ['rock', 'paper', 'scissors'];
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissors');

// Function to get a random choice for the computer
const getRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return computerOptions[randomIndex];
};

// Function to determine the winner
const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
};

// Function to update the game result
const updateGameResult = (result) => {
  const winDiv = document.getElementById("win");
  const loseDiv = document.getElementById("lose");
  const drawDiv = document.getElementById("draw");

  //winDiv.classList.add("hidden");
  //loseDiv.classList.add("hidden");
  //drawDiv.classList.add("hidden");

  if (result === "win") {
    winDiv.classList.remove("hidden");
  } else if (result === "lose") {
    loseDiv.classList.remove("hidden");
  } else {
    drawDiv.classList.remove("hidden");
  }
};

// Function to handle the player's choice
const handlePlayerChoice = (playerChoice) => {
  const computerChoice = getRandomChoice();
  const result = determineWinner(playerChoice, computerChoice);
  document.getElementById("player1").classList.remove("rock", "paper", "scissors");
  document.getElementById("player1").classList.add(computerChoice);

  // Update player2 hand based on computer choice
  document.getElementById("player2").classList.remove("rock", "paper", "scissors");
  document.getElementById("player2").classList.add(computerChoice);

  // Update game result text
  updateGameResult(result);
};

// Event listeners for player's choices
rockBtn.addEventListener("click", () => handlePlayerChoice("rock"));
paperBtn.addEventListener("click", () => handlePlayerChoice("paper"));
scissorBtn.addEventListener("click", () => handlePlayerChoice("scissors"));
