"use strict";

//OBJECTS
const fernando = {
  firstName: "Fernando",
  lastName: "Canul",
  age: 22,
  profession: "Software Engineer",
  friends: ["Lara", "Puerto", "Felipe"],
};

console.log(fernando);

console.log(fernando.firstName);
console.log(fernando["firstName"]);

const nameKey = "Name";

console.log(fernando["first" + nameKey]);
