"use strict"
const comGuess = Math.floor(Math.random() * 99) + 1;
document.querySelector("#guess").focus();
console.log(comGuess);

document.querySelector("button").addEventListener("click", btn_click);
function btn_click(){
const userGuess = parseInt(document.querySelector("#guess").value);
console.log(userGuess);
if (userGuess === comGuess){
    document.querySelector("#result").textContent = "Korrekt!";
    document.querySelector("#result").className = "correct";

} else if (userGuess < comGuess){
    document.querySelector("#result").textContent = "For lavt! Prøv igen";
    document.querySelector("#result").className = "too-low";

} else {
    document.querySelector("#result").textContent = "For Højt! Prøv igen";
    document.querySelector("#result").className = "too-high";

}
    
}
