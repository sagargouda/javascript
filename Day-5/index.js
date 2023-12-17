"use strict";
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 34, price = 39) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH128");

//?? 129) How passing arguments works(value vs refrence)

// const flight = "LH238";
// const sagar = {
//   name: "sagar",
//   passport: 2334455455,
// };

// const checkIn = function (flightNum, passenger) {
//   (flightNum = "LH23388"), (passenger.name = "ananya");
//   if (passenger.passport == 2787279238989) {
//     alert("check in");
//   } else {
//     alert("wrong password!");
//   }
// };

// checkIn(flight, sagar);
// console.log(flight);
// console.log(sagar);

//??? Funcitons accepoting call back funcitons

// const oneWord = function (str) {
//   return str.replace(/ /g, " ").toLowerCase();
// };

// const upper = function (str) {
//   const [first, ...other] = str.split(" ");
//   return [first.toUpperCase(), ...other].join(" ");
// };
// // higer order function
// const transformer = function (str, fn) {
//   console.log(`Transgormed string: ${fn(str)}`);
// };
// transformer("javscript is best language", upper);

//!! callback function exmaple
