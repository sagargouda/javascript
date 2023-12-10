// First Line in programming
// console.log("hello world");

// let name = "sagar";

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof Number);
// console.log(typeof BigInt);
// console.log(typeof Boolean);
// console.log(typeof String);
// console.log(typeof Symbol);

//!! here js creates this in global object
lastName = "sgaar";
console.log(lastName);

//!! type conervsion
const ins = "1991";
console.log(Number(ins) + 19);

//!! coercion
var num = 5;
var str = "10";
var result = num + str;
console.log(result);

//!! NaN
// console.log(Number("sgar"));
// console.log(typeof NaN); // it shows number because it's like nuumber which is invalid.

//!! Ternary operators (conditional operator)
// const age = 23;
// age >= 23 ? "aged" : "not aged";

//!! callling a fucntion inside a function

// function subscriber(money) {
//   if (money >= 200) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function watchMovie(name, payment) {
//   const checked = subscriber(payment);
//   if (checked) {
//     console.log(`you can watch ${name}`);
//   } else {
//     console.log(`pay money to watch`);
//   }
// }
// watchMovie("nun", 20);

//!!Object Methods
const bio = {
  names: "sagr",
  age: 21,

  whatToDo: function () {
    console.log(this);
    console.log(`sits in front of laptop and his name is ${this.names}`);
  },

  normalLife: () => {
    console.log(`what am i doing ${this.names}`);
  },
};
bio.whatToDo();
bio.normalLife();
