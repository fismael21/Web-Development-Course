"use strict";

//LOOP WHILE

let i = 0;
/*
while (i < 10) {
  console.log(i);
  i++;
}
*/

let randomNumber = Math.trunc(Math.random() * 6) + 1;

while (randomNumber !== 6) {
  console.log(`Random number: ${randomNumber}`);
  randomNumber = Math.trunc(Math.random() * 6) + 1;
}

/*
for (let j = 0; j < 10; j++) {
  console.log(j);
}
*/
