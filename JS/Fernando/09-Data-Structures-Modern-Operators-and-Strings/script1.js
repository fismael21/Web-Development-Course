"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const restaurant = {
  name: "'Classico Italiano'",
  location: "'Via Angelo Tavanti 23', 'Firenze', 'Italy'",
  categories: ["'Italian'", "'Pizzeria'", "'Vegetarian'", "'Organic'"],
  starterMenu: [
    "'Focaccia'",
    "'Bruschetta'",
    "'Garlic Bread'",
    "'Caprese Salad'",
  ],
  mainMenu: ["'Pizza'", "'Pasta'", "'Risotto'"],

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
};

//Destructuring arrays
const arr = [2, 3, 4];
const a1 = arr[0];
const b1 = arr[1];
const c1 = arr[2];
console.log(a1, b1, c1);

const [x, y, z] = arr;
console.log(x, y, z);

let [first, , third] = restaurant.categories;
console.log(first, third);

//Switching variables
[first, third] = [third, first];
console.log(first, third);

//Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//Nested destructuring
const nested = [2, 4, [5, 6]];
const [a, b, c] = nested;
console.log(nested);

const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

//Default values
const [p = 1, q = 2, r = 3] = [8, 9];
console.log(p, q, r);
