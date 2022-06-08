"use strict";

var firstName = "Ismael";

const fernando = {
  firstName: "Fernando",
  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
    /* Solution 1
    const self = this; //Self or that
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    }; */

    //Solution 2
    const self = this; //Self or that
    const isMillenial = () => {
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey, ${this.firstName}`),
};

fernando.greet();
fernando.calcAge();

const addExpre = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpre(2, 5);
addExpre(1, 2, 3, 4);

/*
var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
};
addArrow(4, 5);
*/
