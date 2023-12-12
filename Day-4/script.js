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
};

//!! 2) destructuring objects

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
