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
//   (flightNum = "LH23388"), (passenger.name = "anya");
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

// const oneWord = function (str) {
//   //1st method
//   // let answer = [...str];
//   // let final = "";
//   // for (const items of answer) {
//   //   final += items.toLowerCase();
//   // }
//   // return answer.join("");
//   //2 method
//   return str.replace(/ /g, "").toLowerCase();
// };
// const UpperFirstWord = function (str) {
//   const [first, ...others] = str;
//   return [first.toUpperCase(), ...others].join("");
// };

// const workk = function (str, fn) {
//   console.log(fn(str));
//   console.log(fn.name);
// };

// workk("sagar", UpperFirstWord);

//!! Function acepting returning function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// //?? we can also do this
// greet("hello")("reddy");

//!! fuction accepting return fucnton(arrow fucniton)

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet("hey")("sagr");

//!! setting this keyword manually
// (setting this keyword manually)

// const kingfisher = {
//   airline: "kingfisher",
//   iatacode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//     this.bookings.push({ fights: `${this.iatacode}${flightNum}`, name });
//   },
// };

// kingfisher.book(239, "sagar reddy");
// kingfisher.book(636, "anni");
// console.log(kingfisher);

// const eurowings = {
//   airline: "EuroWings",
//   iatacode: "EW",
//   bookings: [],
// };

// const book = kingfisher.book;
// //?? here book is undefined as we saw earlky in regualar fucntion call this keyword is undefined , so book is not a mthod it's a fuction now , so this keyword is undefined , so solution is we have js what this keyword explicitly is so there are 3 methods call , aply , bind
// // book(23, "nilw");
// //?? here first argument is exactly what we want this keyword to point to , so this keyword point to euro wings object
// book.call(eurowings, 23, "sarah williams");
// console.log(eurowings);
// // ?? now this keyword points to kingfisher  , so we can manually manipulate this keyword
// book.call(kingfisher, 2339, "mary coper");
// console.log(kingfisher);

// const bunker = {
//   name: "bunker",
//   iatacode: "LB",
//   bookings: [],
// };
// const look = kingfisher.book;
// look.call(bunker, 2333428298239, "shamana");
// console.log(bunker);

// //?? appply method (does same thing as call but it doesn't receive arguments after this keytword but it will take array )

// const flightData = [58777, "shreayays"];
// book.apply(bunker, flightData);
// console.log(bunker);

// //!! bind method

// //?? bind allows to manually set this keyword

// const bookBu = book.bind(bunker);
// const bookWu = book.bind(eurowings);
// bookBu(231111, "venaat");
// bookWu(2172128281280912, "vanas");

//!! Applying knowledge of call , apply and bind

// const india = {
//   countryName: "india",
//   population: "2.7 Bilion",
//   stamp: [],
//   work(gdp, workers) {
//     console.log(
//       `${this.countryName} has a ${this.population} population in it and skilled workers are just ${workers} such that there gdp is ${gdp}`
//     );
//     this.stamp.push({
//       workers,
//       gdp,
//     });
//   },
// };
// india.work(3.7, "34 million");
// console.log(india);

//?? using call and apply method
// const china = {
//   countryName: "china",
//   population: "5 Bilion",
//   stamp: [],
// };
// const work = india.work;
//?? call method
// work.call(china, 4.7, "90 million");
// console.log(china);
//?? apply method
// const donT = [4.7, "98 millionj"];
// work.apply(china, donT);
// console.log(china);
//?? bind method(most used)
// const give = work.bind(china);
// give(5.7, "288 million");
// console.log(china);

// const object = [
//   {
//     name: "sagar",
//     price: 50000,
//   },
//   {
//     name: "reddy",
//     price: 30000,
//   },
//   {
//     name: "Iagar",
//     price: 40000,
//   },
// ];

// object.sort((a, b) => {
//   // First, compare by prices
//   if (a.price !== b.price) {
//     return a.price - b.price;
//   }

//   // If prices are equal, then compare by names
//   return a.name.localeCompare(b.name);
// });

// console.log(object);

//?? bind methos with an event listener

// const kingfisher = {
//   airline: "kingfisher",
//   iatacode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
//     );
//     this.bookings.push({ fights: `${this.iatacode}${flightNum}`, name });
//   },
// };

// kingfisher.planes = 300;
// kingfisher.buyplanes = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

//?? so we get that ubutton element so here can know that this keyoword in event listners is directy pointed that element where they are being clicked so we get nan when we clg this.planes

//?? resolve = we need to manually define this keyword , we use bind because call method calls a fucntion but ind keyword giuves us the new funciton , we explicitly make this keyword o point to kingfisher object method

// document
//   .querySelector(".buy")
//   .addEventListener("click", kingfisher.buyplanes.bind(kingfisher));

//?? partial application = we can preset parameters

//?? general funciton for adding tax
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
//?? first argumenyt is this keyword but here we don't care about this keyword as we are not making any instanmces of object
// const addIND = addTax.bind(null, 0.23);
// console.log(addIND(2000));

//?? writing in terms of fucntion returning function

// function addTax(value) {
//   return function addIND(rate = 0.23) {
//     console.log(value + value * rate);
//   };
// }
// const sayMan = addTax(200);
// sayMan();

//!! immediately invoke fucntion expressions (used in async await)
//?? normal fucntion
// const runOnce = function () {
//   console.log("this will run once ");
// };
// runOnce();

//?? IIFE (cover it with () to run it)
// (function () {
//   console.log("this will nevrrun again");
// })();

// //?? for arrow fucntion
// (() => console.log("hey sgaar"))();

// {
//   var name = "sgaar";
// }
// console.log(name);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//!!!! closures
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passegers`);
//   };
// };
// //?? boooker is also fucntion here
// const booker = secureBooking();
// booker();
// booker();
// booker();
