"strict mode";

console.log(me);
//console.log(job);
//console.log(year);

var me = "Fernando";
let job = "Software Engineer";
const year = 1999;

//Functions
console.log(addDecl(2, 3));
//console.log(addExpre(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpre = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

//console.log(x === window.x);
//console.log(y === window.y);
//console.log(z === window.z);
