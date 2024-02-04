"use strict"

// document load

//variabel for userChoice, computerChoice og result
let userChoice;
let computerChoice;
let result;


// eventlisteners på knapper
document.querySelector(".rock").addEventListener("click", klikRock)
document.querySelector(".paper").addEventListener("click", klikPaper)
document.querySelector(".scissors").addEventListener("click", klikScissors)

// klik funktioner
function klikRock() {
    userChoice = "rock";
    makeComputerChoice();
}

function klikPaper() {
    userChoice = "paper";
    makeComputerChoice();
}

function klikScissors() {
    userChoice = "scissors";
    makeComputerChoice();
}

// funktion til random makeComputerChoice
function makeComputerChoice() {
    // indsæt hidden
    const randoNum = Math.floor(Math.random() * 3);
    if (randoNum === 0) {
        computerChoice = "rock";
    } else if (randoNum === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    console.log("compChoice", userChoice);
    console.log("RANDO", randoNum);
    console.log("computerChoice", computerChoice);


    determineWinner();
}

// find ud af hvem der vinder
// option + 1 = |

function determineWinner() {
    // removing text from last game
    resetResultText();
    if (userChoice === computerChoice) {
      // if the players played the same hand
      result = "draw";
    } else if ((userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "rock")) {
      // all the instances in which the computer wins
      result = "lose";
    } else {
      // all other instances left: the human player wins
      result = "win";
    }
  
    starHandtAnimations();
  }


// funktion på hænderne. sætter en animationend på, så den starter igen
function startHandAnimations() {
    document.querySelector("#player1").addEventListener("animationend", handAnimationsEnd)
    document.querySelector("#player1").classList.add("shake")
    document.querySelector("#player2").classList.add("shake")

}

// fjerner shake igen så den kan vise håndtegn nu
function starHandtAnimations() {
    // adding animation end eventlistener
    document.querySelector("#player1").addEventListener("animationend", handAnimationsEnd);
    // get those hands shaking
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");
  }

    function handAnimationsEnd() {
        // removing all added shake classes so other classes can be added
        resetHands();
      
        console.log("Animation ended!");
        // showing the correct hand signs
        if (userChoice === "rock") {
          document.querySelector("#player1").classList.add("rock");
        } else if (userChoice === "paper") {
          document.querySelector("#player1").classList.add("paper");
        } else {
          document.querySelector("#player1").classList.add("scissors");
        }
        if (computerChoice === "rock") {
          document.querySelector("#player2").classList.add("rock");
        } else if (computerChoice === "paper") {
          document.querySelector("#player2").classList.add("paper");
        } else {
          document.querySelector("#player2").classList.add("scissors");
        }
        showWinnerScreen();
      }

function showWinnerScreen() {
  // vis den rigtige vinder skærm  
  if (result === "win") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (result === "lose") {
    document.querySelector("#lose").classList.remove("hidden");
  } else {
    document.querySelector("#draw").classList.remove("hidden");
  }
}

function resetHands() {
  document.querySelector("#player1").classList.remove("shake", "rock", "paper", "scissors");
  document.querySelector("#player2").classList.remove("shake", "rock", "paper", "scissors");
}

function resetResultText() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
}

