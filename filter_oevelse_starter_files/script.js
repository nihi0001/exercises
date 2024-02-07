"use strict";

document.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click", btnFilterEVTListener )
});

function btnFilterEVTListener(evt){
  console.log(evt.currentTarget);

  if (evt.currentTarget.dataset.filter === "*"){
    showTheseVehicles(vehicles);
  } else if (evt.currentTarget.dataset.filter === "electric"){
    showTheseVehicles(vehicles.filter(isElectric));
  }else if (evt.currentTarget.dataset.filter ==="more_than_seats"){
    showTheseVehicles(vehicles.filter(hasMoreThanTwoSeats));
  }else if ()}

    

  //console.log(evt.currentTarget.dataset.filter);

    //console.log(evt.currentTarget.dataset.filter);
    // currenttarget fortæller os hvilket element eventet sidder på. altså hvilken knap vi trykker på
    // når vi tilføjer dataset.filter så får vi kun html 'data-filter' navnet frem.


const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

//const rugbrødPoweredVehicles = vehicles.filter(vehicle =>{
//return vehicle.fuel === 'Rugbrød' && vehicle.passengers > 1;
//});

showTheseVehicles(vehicles);


//const electricVehiclesOwnedByJonas = vehicles.filter(isElectricAndOwnedByJonas);
//showTheseVehicles(electricVehiclesOwnedByJonas);


showTheseVehicles(vehicle);

function showTheseVehicles(arr) {
  ulPointer.innerHTML =
  "<li><strong>Type</strong></li><li><strong>Fuel</strong></li><li><strong>Passengers</strong></li><li><strong>Stops</strong></li> <li><strong>OwnedBy</strong></li><li><strong>Electric</strong></li><li><strong>Tandem</strong></li>"
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy ?? "-"}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric === undefined ? "" : "X"}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem === undefined ? "" : "X"}</li>`;
  });
}

// 1.1 filtering der viser alle eldrevne fartøjer

//const ulPointer = document.querySelector("ul");
//function isElectric(vehicle){
 // if(vehicle.isElectric ===true){
//return vehicle;
//  }
//}
//const allElectricVehicles = vehicles.filter(isElectric);

//showTheseVehicles(allElectricVehicles);



// 1.2 filtering der viser alle fartøjer med mere end 2 sæder

//function hasMoreThanTwoSeats(vehicle){
 // if(vehicle.passengers>1){
// return vehicle;
 // }
// }
// const vehicleWithMoreThanTwoSeats = vehicles.filter(hasMoreThanTwoSeats);
// showTheseVehicles(vehicleWithMoreThanTwoSeats);

// 1.3 filtering der viser alle fartøjer el drevne af Jonas

//function isElectricAndOwnedByJonas(vehicle){
  //return vehicle.isElectric === true && vehicle.ownedBy === "Jonas";
 // }
  
 // const electricVehiclesOwnedByJonas = vehicles.filter(isElectricAndOwnedByJonas);
 // showTheseVehicles(electricVehiclesOwnedByJonas);

 /// 1.4 filtrering efter alle rugbrødsdrevne fartøjer med plads til mere end en
  
 //const rugbrødPoweredVehicles = vehicles.filter(vehicle =>{
  //return vehicle.fuel === 'Rugbrød' && vehicle.passengers > 1;
 // });
  
 // showTheseVehicles(rugbrødPoweredVehicles);


// ANDET

// += betyder at den adder up/ligger til. se kontrol øvelse nedenfor:

//let str = "Hej";
//console.log(str)
//str += "du!";
//console.log(str)
//let num =2;
//console.log(num)
//num += 4;
//console.log(num)


// resultat i konsol er:
// Hej
//Hejdu! // fordi den tilføjer hej + du!
// 2
// 6 // fordi den tilføjer 2 + 4