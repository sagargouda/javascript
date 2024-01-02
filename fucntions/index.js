"use strict";

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 0, price = 15000) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH123");
// console.log(bookings);

//!! how passing argument works
// const flight = "LH123";
// const sagar = {
//   name: "sagar reddy",
//   passport: 23623263686721,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "mr" + passenger.name;
//   if (passenger.passport === 23623263686721) {
//     console.log("checvk in");
//   } else {
//     console.log("wrong");
//   }
// };
// checkIn(flight, sagar);
// console.log(flight);
// console.log(sagar);

//?? here flight num has a copy of flight , not orignal value ., so flight num is diffrentl;y variable , but sagar object changed , when we pass refence type it is pointing to same object in heap

// const newPasport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPasport(sagar);
// checkIn(flight, sagar);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//?? javascript doens't have pass by refence even though it looks it , it only has pass by value , we pass a refrence to the fucntion and we don't pass by the fucntion

/////////////////////////////////////////////////////////////////////

//!! first class fucntion and higher order fucntion
//!! (functions accepting callback)

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const uppercase = function (str) {
//   const [first, ...other] = str.split(" ");
//   return [first.toUpperCase(), ...other].join(" ");
// };
// //?? higher order fucntion
// const transform = function (str, fn) {
//   console.log(`transformed string ${fn(str)}`);
// };
// transform("javsscript is best", uppercase);

//!! function returning fucntion

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeter = greet("hey");
// greeter("sagar");

// greet("hey")("sagar");

//?? fucntion eturning fucntion as arow function

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet("hey")("sgaar");

//!! call and apply method (Important)(setting this keyword )
//?? here this poitns to kingfisher object itself
// const kingfisher = {
//   airline: "kingfisher",
//   code: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.code}${flightNum}`, name });
//   },
// };

// kingfisher.book(234, "sagar reddy");

// //?? creatye a new fucntion called book and store book methdod of kingfisher
// const rcb = {
//   airline: "rcb",
//   code: "rcb",
//   bookings: [],
// };

// const book = kingfisher.book;
//?? if i just do book(23,sarah) we get type error because in regualr fucntion this is undefined in strict mode , so we need to tell js what this keyword should be explicitely so there 3 methods calkl,apply,bind
// book(23,"sgaar")
// book.call(rcb, 23, "anan");

// const bookRcb = book.bind(rcb);
// bookRcb(33, "sagar redddy");

// //?? specific flight so we preset early only , so it is also called partial application
// const bookEW23 = book.bind(rcb, 23);
// bookEW23("ananaa reddy");
// bookEW23("sbko");

//!! bind method in an add event listener
// const india = {
//   country: "india",
//   prime_minister: "modi",
//   addSpecial: [],
//   gender(male, feamle) {
//     console.log(
//       `${this.country} named a prime minster called ${this.prime_minister} and this country has ${male} million males and ${feamle} million females`
//     );

//     this.addSpecial.push({ male: `${male}`, female: `${feamle}` });
//   },
// };
// india.gender(300, 4000);

// const newzy = {
//   country: "new zealand",
//   prime_minister: "sagar",
//   addSpecial: [],
// };

// const newZ = india.gender;
// const newzii = newZ.bind(newzy);
// newzii(10, 20);

// //?? button add event listener
// newzy.doc = 200;
// newzy.spy = function () {
//   console.log(this);
//   this.doc++;
//   console.log(this.doc);
// };

// document.querySelector(".btn").addEventListener("click", newzy.spy.bind(newzy));

//?? partial aplpliction (order of argument is important)
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// //?? so null is for this keyword
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// function addTax(rate) {
//   return function addVAT(value) {
//     const formule = value + value * rate;
//     return formule;
//   };
// }

// console.log(addTax(0.23)(200));
