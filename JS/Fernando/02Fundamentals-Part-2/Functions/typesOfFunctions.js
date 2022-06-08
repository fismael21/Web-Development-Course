"use strict";

//FUNCTION DECLARATION
function calcAge1(birthYear) {
  const age = 2022 - birthYear;
  return age;
}

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  const age = 2022 - birthYear;
  return age;
};

console.log(calcAge1(1999));
console.log(calcAge2(1999));
