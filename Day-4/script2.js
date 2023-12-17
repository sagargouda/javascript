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

//!! logical assignment operator

const rest1 = {
  name: 'sgar',
  numGuests: 20,
};
const rest2 = {
  name: 'la piza',
  owner: 'reddy',
};
//?? normal way
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest2);
// console.log(rest1);
//?? using logical or assignment oprator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
//?? using and assignment operatr
rest1.name &&= 'ananomous';
rest2.name &&= 'ananomous';
console.log(rest1);
console.log(rest2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//!! nUllish coelascing operator
//?? it don't work in terms of false or truth valoue it works in terms of nullish values(null and undefined) not 0 or '' , so only if a guests are not exist then it will be undefined so we use that

// example
// let guests = 0;
// function howManyGuests(guests) {
//   // but it's wrong 0 here means no guests are present so to avoid this we can use ?? nullish coealscing operator
//   // console.log(guests || 10);
//   console.log(guests ?? 10);
// }
// howManyGuests(guests);
//!! Short circuiting (in terms of OR)
//?? example -1 (if first value is truty it will return that and other valye is not operated )
// console.log(2 || 'sagar');
// console.log('' || 'sagar');
// console.log(undefined || null);

//!! short cicuiting (in terms of And)
//?? example-2( and operator short circuits when first value is falsy and returns that falsy value without even checking second value and if both are true last value is returned)
// console.log(0 && 'sagar');
// console.log('sgar' && 'reddy');

//!! shallow copy  in arrays

// const ogArray = [1, 2, 3];
// const shallowCopyArray = ogArray.slice();
// shallowCopyArray[1] = 6;
// console.log(shallowCopyArray);
// console.log(ogArray);

//!! deep copy in arrays
// const ogArrayy = [1, 2, 3];
// const deepCopyArray = JSON.parse(JSON.stringify(ogArrayy));
// deepCopyArray[0] = 56;
// console.log(deepCopyArray);
// console.log(ogArrayy);

//!! shallow copy in objects

// const originalObject = {
//   name: 'sagar',
//   age: 23,
// };
// const shallowObj = { ...originalObject };
// shallowObj.name = 'anant';

// console.log(shallowObj);
// console.log(originalObject);

//!! deep copy in object

// const originalObject = {
//   name: 'sgar',
//   age: 23,
// };
// const deepCopyObj = Object.assign({}, originalObject);
// //or
// // normal array type
