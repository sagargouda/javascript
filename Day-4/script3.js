//Looping Arrays (for-of loop)
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

//!! looping objects (object keys , values and entries)

//?? keys looping
// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }
//?? value looping
// let average = 0;

// for (const numb of Object.values(restaurant.openingHours)) {
//   average = average + numb.open;
// }
// average = average / 3;
// console.log(average);
//?? key and value looping
// for (const [key, value] of Object.entries(restaurant.openingHours)) {
//   console.log(key, value);
// }

//!! optional chaining(?.)
//?? so baiscally thhis mon doesn't exist and we don't know this , like it came from web api and we get a error like can't read thgings of undefined , to avoid this we have to check using if mon exists show open but it's time consuming , so we have optional chaning
// console.log(restaurant.openingHours.mon.open);
//?? using optional chaining (if certain property doesn't exist it wil print undefined)
//?? only before question mark exists it returns or else undefined will show, we can have multiple optional chaining

// console.log(restaurant.openingHours.mon?.open);
//??? real example
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of weekdays) {
//   console.log(
//     `At ${day} we open at `,
//     restaurant.openingHours[day]?.open ?? 'closed'
//   );
// }

//?? optional chaining also for arrays
// console.log(restaurant.mainMenu?.[5] || 'dish is in preapartion');

//?? optional chaing on methods

// console.log(restaurant.order?.(0, 1) ?? "method doesn't exist");
// console.log(
//   restaurant.orderDelivery?.(
//     { time: '23', name: 'sagar', hot: 'super' } ?? "method doesn't exist"
//   )
// );

////////////////////////////////////////////////////////////////////////////////////////////
//!! enhanaced object literal
//Es6 is diffrent

//////////////////////////////////////////////////////////////////////////////////////////
//!! for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// for (const item of menu) {
//   console.log(item);
// }
// item elemet is current element in each iteration
//?? for getting index
// for (const item of menu.entries()) {
//   console.log(item);
// }

// menu.entry makes that big part of array into small sub arrays and gives it idex

//?? using entries we can get both index and element
// for (const [index, element] of menu.entries()) {
//   console.log(index, element);
// }
