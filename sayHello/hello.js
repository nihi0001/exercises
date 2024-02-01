"use strict";

// function exercise 1 a
sayHello("Mona");
function sayHello(firstName) {
    console.log("Hello", firstName)
}

// vi kalder vores funktion med stringen mona, og så går det ind i funktionen (firstname) og så kan vi se firstname (Mona) i konsollen.  
// nu har jeg tilføjet parameteren "hello" til consolen, så den giver mig to parametre "hello" og "firstname" (Mona)


// function exercise 1b
// 1
sayHello("Frank");
function sayHello(firstName) {
    console.log("Hello", firstName)
}
// "say hello ("Mona");" må bare ikke være inde i tuborgklammmen. Virker om den er over eller under. 
// der sker ingenting. rækkefølgen er ligegyldig

// 2. 

const myName = "Bo"

sayHello(myName);
function sayHello(firstName) {
    console.log("Hello", firstName)
}
// når man opretter en variabel/const så kan man erstatte det med "say hello" argumentet. så skriv funktionen istedet for argumentet
// rækkefølgen er vigtig her, da myName først skal defineres

// 3 
const firstName = "Martin"

sayHello(firstName);
function sayHello(firstName) {
    console.log("Hello", firstName)
}

// ikke en god practice. men man kan godt lade sig gøre at have en variabel indenfor og udenfor. 

// 4
sayHello("");
function sayHello(firstName) {
    console.log("Hello", firstName)
}

// ikke defineret. den får ikke nogle værdi, og bliver derfor console logget som undefined

//5
//sayHello("Hans", "Hansen");
//function sayHello("firstname") {
   // console.log("Hello", firstName)
//}

// forstår ikke

//6

// forsår heller ik

//opsummering, rækkefølge betyder meget

// function exercise 1b
//1

// pr defalt
presentPet(Kim);
function presentPet(firstName = "Mr Jinxy"){
    console.log(`My name is${firstname}`);
}

