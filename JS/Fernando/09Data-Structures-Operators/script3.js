"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
};

const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

//The spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copying array
const mainMainCopy = [...restaurant.mainMenu];
console.log(mainMainCopy);

//Joining 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps and sets, but NOT OBJECTS
const str = "Fernando";
const letters = [...str, "@", "x"];
console.log(str);
console.log(...str);
console.log(letters);

//Real-word example

/*
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];
*/

const ingredients = ["Mushrooms", "Aspargus", "Cheese"];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

//OBJECTS
const newRestaurant = { foundedIn: 1982, ...restaurant, founder: "Fernando" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Doggo";

console.log(restaurant.name);
console.log(restaurantCopy.name);
