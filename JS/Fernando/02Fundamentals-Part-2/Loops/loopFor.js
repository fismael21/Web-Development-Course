"use strict";

//LOOP FOR

/*
const fernando = [
  "Fernando",
  "Canul",
  23,
  "Software Engineer",
  ["Lara", "Puerto", "Felipe"],
];

for (let i = fernando.length - 1; i >= 0; i--) {
  console.log(i, fernando[i]);
}
*/

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Exercise number: ${exercise}`);
  for (let repetition = 1; repetition < 6; repetition++) {
    console.log(`Repetition number: ${repetition}`);
  }
}

/*

//console.log(fernando);

let types = [];

for (let i = 0; i < fernando.length; i++) {
  //console.log(fernando[i]);
  //types[i] = typeof fernando[i];
  types.push(typeof fernando[i]);
}

console.log(types);

let years = [1999, 2020, 1982, 1977];
let ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

//Continue and break

console.log("---ONLY STRINGS---");
for (let i = 0; i < fernando.length; i++) {
  if (typeof fernando[i] !== "string") continue;
  console.log(fernando[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < fernando.length; i++) {
  if (typeof fernando[i] === "number") break;
  console.log(fernando[i]);
}

*/
