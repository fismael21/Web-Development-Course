"use strict";

//ARRAY METHODS
const friends = ["Fernando", "Lara", "Puerto"];
let newLenght = friends.push("Maria"); //ADDS TO THE END //RETURNS THE LENGHT OF THE NEW ARRAY

console.log(friends);
console.log(newLenght);

friends.unshift("Jonas"); //ADDS TO THE BEGINNING
console.log(friends);

const removeElement = friends.pop(); //REMOVES THE LAST ELEMENT OF THE ARRAY //RETURNS THE REMOVED ELEMENT
console.log(removeElement);
console.log(friends);

const removeFirstElement = friends.shift(); //REMOVES THE FIRST ELEMENT OF THE ARRAY
console.log(removeFirstElement);
console.log(friends);

console.log(friends.indexOf("Lara")); //RETURNS THE INDEX

console.log(friends.includes("Lara")); //CHECKS IF THE ELEMENT IS IN THE ARRAY

if (friends.includes("Lara")) {
  console.log("Hello, Lara!");
}
