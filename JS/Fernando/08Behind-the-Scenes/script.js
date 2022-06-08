"use strict";

function calcAge(birthDay) {
  const age = 2022 - birthDay;
  //console.log(firstName);

  function printAge() {
    let output = `${firstName}. You're ${age}, born in ${birthDay}.`;
    console.log(output);

    if (birthDay >= 1981 && birthDay <= 1996) {
      //Creating new variable with same name as outer scope's variable.
      //const firstName = "Ismael";

      //Reassigning outer scope's varibale.
      //output = "Hello, World!";

      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    //console.log(millenial);
    //console.log(add(3, 4));
  }

  printAge();
  return age;
}

const firstName = "Fernando";

calcAge(1983);
