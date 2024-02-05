"use strict"
//let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//console.log("letters[4]", letters[4]);
//console.log("letters[7]", letters[7]);
//console.log("letters.length", letters.length);
//console.log("sidste letter", letters[letters.lenth -1])

//OPGAVE 1
//"use strict"
//let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//console.log(letters[4]);
// henviser til nr 4 i array - derfor "e"
//let newarr = letters;
// lav et nyt array 
//newarr[4] = "*"
// nyt array udfra 4
//console.log(letters[4]);
// konsollen siger e

//newarr betyder new array

// SPØRGSMÅL TIL OPGAVE 1
// hvad er forskellen på letters og newarr
// det er en kopi så der er ikke nogle forskel

// hvordan ser arrayet ud før og efter skiftet til newarr
// ==

// er det muligt at skifte en af arrays uden 
// nej det er det ikke. mutable

// hvad sker der hvis du bruger const istedet for let
// der sker ikke noget, samme resultat. 

// array methods
// opgave 2

// push betyder at man ligger til
// push returnere længden
// stjernerne er med til ar adskille

//const people = ["Harry", "Ron", "Hermione"]
//let result;
//result = people.push("Draco");
//console.log("result", result);
//console.log("people", people);
//console.log("*******");

// i konsollen giver den resultat 4 og tilføjer Draco som den 4. ting i array.
// så den giver et nyt array ["Harry", "Ron", "Hermione", "Draco"]

// try forskellige array metoder

const people = ["Harry", "Ron", "Hermione"]
let result;
result = people.push("Draco");
// push tilføjer draco til arrayet
// den returnere længden af arrayet efter den er blevet pushet = result 4

result = people.pop();
// pop fjerner det sidste element i et array
// return value er draco, da det er det element som fjernes

result = people.push("Neville");
// "Newville" er blevet tilføjet til array 
// det retunere (4), da nu er arrayet på 4 

result = people.push("Luna");
// samme som ovenstående
// længden er 5 som bliver returneret


result = people.slice(0,3);
// slice giver os et udsnit af vores array som går fra 0-3 og retunere det, men efterlader vores oprindelige array uforandret.
// den tager fra index 0 til 3
// array (3) ["Harry", "Ron", "Hermione"]
// array (4) ["Harry", "Ron", "Hermione", "Neville", "Luna"]

result = people.splice(1,0,"Cho");
// retunere ingenting, men opdatere det oprindelige array
// den går ind på plads 1, og går 0 hen og indsætter "cho"
// hvor den starter (1) og hvor mange den sletter (0) og hvad den tilføjer (cho)
// array []
// array ["Harry", "Cho" "Ron", "Hermione", "Neville" ]

people[1]= "Ginny";
// elementet på plads 1 skal være Ginny
// den erstater nr 1 i array med ginny. derfor er ron skiftet ud med Ginny

result = people.push("Fred", "George");
// fred og george er blevet tilføjet til array pga. push

result = people.indexOf("Fred");
// den angiver hvilket nr i arrayet "fred" har. Derfor er nr 6 returneret.

result = people.splice(result,1)
// den tager fra 6 og ind frem, og splicer 6 ud. Så fred er fjernet.
// den returnere "fred" som et array, da vi har fjernet fred "array ["Fred"]". den retunere det fjernede element
// array ["Harry", "Ginny", "Ron", "Hermione", "Neville", "George" ]


console.log("result", result);
console.log("people", people);
console.log("*******");


// Push betyder at tilføje
// pop
// slice
// splice
// indexOf



