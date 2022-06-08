"use strict";

const friend1 = "Fernando";
const friend2 = "Lara";
const friend3 = "Puerto";

//ARRAYS
const friends = ["Fernando", "Lara", "Puerto"];
console.log(friends);

const years = new Array(1999, 2020, 1987);
console.log(years);

console.log(friends[0], friends[1]);
console.log(friends.length);

//Mutate the array
friends[2] = "Felipe";
console.log(friends);

//Can have different types of values
const firstName = "Fernando";
const Fernando = [firstName, "Canul", 1999, friends];
console.log(Fernando);

//Exercise
const calcAge = function (birthday) {
  return 2022 - birthday;
};

const years2 = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years2[0]));
console.log(calcAge(years2[1]));
console.log(calcAge(years2[2]));
