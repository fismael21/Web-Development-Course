"use strict";

//Logical assignment operators

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

//Or assignment operator
//rest1 = rest1.numGuests || 10;
//rest2 = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

const rest3 = {
  name: "Doggo",
  numGuests: 0,
};

//Nullish assignment operator (null or undefined)
rest3.numGuests ??= 10;
console.log(rest3);

//rest2.owner = rest2.owner && "<ANONYMOUS>";
//And assignment operator
rest2.owner &&= "<ANONYMOUS>";
console.log(rest2);
