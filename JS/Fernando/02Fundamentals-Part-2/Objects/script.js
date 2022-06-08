"use strict";

//OBJECTS
const fernando = {
  firstName: "Fernando",
  lastName: "Canul",
  age: 22,
  profession: "Software Engineer",
  friends: ["Lara", "Puerto", "Felipe"],
};

/*
const interestedIn = prompt(
  "What do you wanna know about Fernando? Choose between firstName, lastName, age, profession and friends. "
);

if (fernando[interestedIn]) {
  alert(fernando[interestedIn]);
} else {
  alert(
    "You must choose between firstName, lastName, age, profession and friends. "
  );
}
*/

fernando.location = "Merida";
fernando["twitter"] = "@elegido21one";

console.log(fernando);

//CHALLENGE
console.log(
  `${fernando.firstName} has ${fernando.friends.length} friends, and his best friend is called ${fernando.friends[0]}.`
);
