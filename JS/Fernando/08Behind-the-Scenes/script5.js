"use strict";
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30,
};

const friend = me;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me", me);
*/

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "John"],
};

const marriedJessica = Object.assign({}, jessica);
marriedJessica.lastName = "Davis";

marriedJessica.family.push("Maria");
marriedJessica.family.push("Julio");

console.log(jessica);
console.log(marriedJessica);
