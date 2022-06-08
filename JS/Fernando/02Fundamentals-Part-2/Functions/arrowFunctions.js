"use strict";

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  const age = 2022 - birthYear;
  return age;
};

const calcAge3 = (birthYear) => 2022 - birthYear;

console.log(calcAge2(1999));
console.log(calcAge3(1999));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1999, "Fernando"));
