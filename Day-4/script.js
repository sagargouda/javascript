'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ time, name, hot }) {
    console.log(time, hot, name);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is ${ing1},${ing2},${ing3}`);
  },
};
//!! 4) Rest operator
//rest
// const [a, b, ...c] = [1, 2, 3, 4];
//spread
// console.log(a, b, ...c);

//?? Objects (remaining elements will be collected in objects not arrays )

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

//?? functions

// const add = function (...sagar) {
//   let sum = 0;
//   for (let i = 0; i < sagar.length; i++) {
//     sum += sagar[i];
//   }
//   console.log(sum);
// };

// add(1, 2, 3, 4, 2);
// add(1, 2);
// add(12, 2, 2, 2, 3, 22, 2);

///////////////////////////////////////////////////////////////////////////////////////////
//!! 3) Spread operator

//?? expanding an array and when passing something to funciton
// const arr = [1, 2, 3];
// const newAeer = [1, 2, ...arr];
// console.log(...newAeer);

// const newMenu = [...restaurant.mainMenu, 'idli', 'vada'];
// console.log(...newMenu);

//?? copy array
// const mainMenu = [...restaurant.mainMenu];

//?? joining 2 arrays;
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

//??spread operator in stringn
// const name = 'sagar';
// console.log(...name, '', 'sss');

//?? real example
// const ing = ['pasta', 'idli', 'vada'];
// restaurant.orderPasta(...ing);

//?? Objects
// const newRest = { ...restaurant, founder: 'sagar', foundedIn: '1911' };
// console.log(newRest);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'sgaar';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
///////////////////////////////////////////////////////////////////////////////////

//!! 2) destructuring objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//?? if i want to change variable names

// const { name: restName, openingHours: open, categories: cat } = restaurant;
// console.log(restName, open, cat);

//?? if something doesn't exist and we are trying to access it (default values)

// const { menu = [], starterMenu: starter = [] } = restaurant;
// const [a, b, c, d] = starter;
// console.log(menu);
// console.log(a, b, c, d);

//?? mutating variables (swapping as said before)

// let a = 11;
// let b = 22;
// const obj = { a: 23, b: 34, c: 34 };
//**You can't do const becauise a and b are already declared and you can't do const {a,b} */
// we overrided it so use () because when you use {}, js wants code blocks so it gives error
// ({ a, b } = obj);
// console.log(a, b);

//?? nested object
// const {
//   fri: { open: opening, close: closing },
//   sat: { open: open, close: close },
// } = restaurant.openingHours;
// console.log(opening, closing);

//?? passing object as argumenst

// restaurant.orderDelivery({
//   time: '12',
//   name: 'sagar',
//   hot: 'yes',
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//!! 1) destructuring array
// const [a, b, c] = [2, 3, 4, 5];
// console.log(a, b, c);

//?? example -1
// const aee = [3, 4, 2, 2];
// const [x, y, z] = aee;
// console.log(x, y, z);

//?? Real example
// const [first, second] = restaurant.starterMenu;
// console.log(first, second);

//?? swapping;
// const arr = [1, 2];
// let [x, y] = arr;
// [y, x] = [x, y];
// console.log(x, y);

//?? real example
// const [x, y] = restaurant.order(2, 0);
// console.log(x, y);

//?? nested arrays destructuring
// const sagar = [1, 2, [2, 3]];
// const [x, y, [z, c]] = sagar;
// console.log(x, y, z, c);
