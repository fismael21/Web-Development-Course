"use strict";

//FUNCTIONS
function logger() {
  console.log("Hello, World!");
  console.log("My name is Fernando");
}

//Calling - running - invoking the function
//logger();

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

//const juice = fruitProcessor(5, 0);
//console.log(juice);
console.log(fruitProcessor(5, 0));
