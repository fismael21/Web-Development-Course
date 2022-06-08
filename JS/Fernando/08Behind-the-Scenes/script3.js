"strict mode";

//console.log(this);

const calcAge = function (birthDay) {
  console.log(2022 - birthDay);
  //console.log(this);
};
//calcAge(1999);

const calcAgeArrow = (birthDay) => {
  console.log(2022 - birthDay);
  //console.log(this);
};
//calcAgeArrow(1999);

const fernando = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

fernando.calcAge();

const maria = {
  year: 2017,
};

maria.calcAge = fernando.calcAge;
//console.log(maria);
maria.calcAge();

const f = fernando.calcAge;
