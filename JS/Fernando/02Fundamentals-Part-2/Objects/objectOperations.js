"use strict";

//METHODS IN OBJECTS
const fernando = {
  firstName: "Fernando",
  lastName: "Canul",
  birthday: 1999,
  age: 22,
  profession: "Software Engineer",
  hasDrivenLicense: true,
  friends: ["Lara", "Puerto", "Felipe"],

  calcAge: function () {
    return 2022 - this.birthday;
  },
};

//console.log(fernando.calcAge(1999));
//console.log(fernando["calcAge"](1999));
//console.log(fernando.calcAge(fernando.birthday));
//console.log(fernando["calcAge"](fernando.birthday));
//console.log(fernando.calcAge());

console.log(
  `${fernando.firstName} is a ${fernando.calcAge()} year old ${
    fernando.profession
  }, and he ${
    fernando.hasDrivenLicense ? "has" : "dosen't have"
  } a driven license.`
);
