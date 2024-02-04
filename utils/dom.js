export function $(selector) {
    return document.querySelector(selector);
  }
  
  export function $$(selector) {
    return document.querySelectorAll(selector);
  }

// her er der lavet en funktion som hedder "$". 
// et enkelt $ betyder at den vælger det øverste element da den læser oppe fra og ned
// to $ betyder at den vælger alle elementer pga "querySelectorAll"
