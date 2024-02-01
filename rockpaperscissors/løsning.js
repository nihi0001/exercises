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

// funktion til makeComputerChoice
function makeComputerChoice() {
    // indsæt hidden
    console.log("compChoice", userChoice);
    const randoNum = Math.floor(Math.random() *3);
    if (randoNum === 0){
        computerChoice = "rock";
    } else if (randoNum === 1){
        computerChoice = "paper"; 
    } else {
        computerChoice = "scissors"; 
    }
    console.log("RANDO", randoNum);

    determineWinner();
}

// find ud af hvem der vinder
function determineWinner() {
    if (userChoice === computerChoice){
        result = "draw";
    } else{
        if((userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "rock")){
            result = "lose";
        } else{
            result = "win";
        }
        }
         // option + 1 = |
    }


    startHandAnimation();


// funktion på hænderne. sætter en animationend på, så den starter igen
function startHandAnimation() {
    document.querySelector("#player1").addEventListener("animationend", handAnimationsEnd)
    document.querySelector("#player1").classList.add("shake")
    document.querySelector("#player2").classList.add("shake")

}

// fjerner shake igen så den kan vise håndtegn nu
function handAnimationsEnd() {
    document.querySelector("#player1").classList.remove("shake")
    document.querySelector("#player2").classList.remove("shake")
    document.querySelector("#player1").classList.remove("rock")
    document.querySelector("#player1").classList.remove("paper")
    document.querySelector("#player1").classList.remove("scissors")
    document.querySelector("#player2").classList.remove("rock")
    document.querySelector("#player2").classList.remove("paper")
    document.querySelector("#player2").classList.remove("scissors")


    //document.querySelector("#player1").classList.add("paper")
    if (userChoice === "rock") {
        document.querySelector("#player1").classList.add("rock");

    } else if (userChoice === "paper") {
        document.querySelector("#player1").classList.add("paper");

    } else {
        document.querySelector("#player1").classList.add("scissors");
    }

    if (userChoice === "rock") {
        document.querySelector("#player2").classList.add("rock");

    } else if (userChoice === "paper") {
        document.querySelector("#player2").classList.add("paper");

    } else {
        document.querySelector("#player2").classList.add("scissors");
    }

showWinnerScreen();
}

function showWinnerScreen{
    if (result === "win"){
        document.querySelector("#win").classList.remove("hidden")
    } else if (result === "loose"){
        document.querySelector("#lose").classList.remove("hidden")
    }

}

