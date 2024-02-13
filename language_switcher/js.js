"use strict";

const selectElement = document.querySelector(".language-select");
const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  languageChange(event.target.value)
});

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
  en: {
    texts: [
      { text: "Boat", location: ".header" },
      { text: "The Robot", location: ".footer" },
    ],
  },
};





// når jeg vil have fat i det første object i arrayet. hvis jeg vil have fat i det andet skriver jeg 1
//console.log(texts.de.texts[0].text);
//console.log(texts[locale].texts[0].text);

// det er et array
//texts[locale].texts.forEach(each =>{
//  console.log(each.location);
 // document.querySelector(each.location).textContent = "hej";
 //console.log(document.querySelector(each.location));
//});

function languageChange (locale){
// det er et array
texts[locale].texts.forEach(each =>{
  console.log("Each",each);

  document.querySelector(each.location).textContent = each.text;
});
}