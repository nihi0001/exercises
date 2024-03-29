import { getRandomNumber } from "./numbers.js";

export function getRandomHSLColor() {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

// h angives som et tal
// s(sustraion) og l(light) angives som procent
// man kan også bruge RGBA, HEX osv. lige nu er det bare hsl