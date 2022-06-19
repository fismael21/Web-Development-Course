"use strict";

//Rest Pattern and Parameters

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

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};

//1.- Destructuring

//SPREAD, because right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//The rest element must be the last element!
const [pizza, pasta, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, pasta, risotto, otherFood);

//OBJECTS
const { fri, ...weekdays } = restaurant.openingHours;
console.log(fri, weekdays);

//2.- Functions
//Can receive an arbitrary number of arguments
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

add(1);
add(1, 2, 3);
add(1, 2, 3, 4, 5);

const x = [23, 5, 7];
add(...x); //Passing an array

restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");
restaurant.orderPizza("mushrooms");
