'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

//!! Simple Methods = methods are just fucnitons that we call on objeects , they are fucntions attached to objects , array method simple means they are also just objects

// let arr = ['a', 'b', 'c', 'd'];
//??slice method(positive index) = we can slicve without changing the original array

// console.log(arr.slice(arr.indexOf('b')));
// slice works only from startr to end
// console.log(arr.slice(3, 1));
//?? slice method using negtive index
// console.log(arr.slice(-4));

// let string = 'sagar';
// console.log(string.slice(1, 3));

//?? splice method
// console.log(arr.splice(2));
// arr.splice(-1); // deletes last element
// console.log(arr);

//?? reverse

// console.log(arr.reverse());
// console.log(arr);

// let arr = ['a', 'b', 'c', 'f', 'e'];
// let arrCopy = arr;
// arr.reverse();
// console.log(arr); // reversed array
// console.log(arrCopy); // reverrsed array

//?? slice extra gyan
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let arrCopy = arr;
// console.log(arr.slice(0, 2));
// console.log(arrCopy.slice(1, 2));
// console.log(arr);
// console.log(arrCopy);

//?? Concat
//??no mutation
// let one = [1, 2, 3, 3, 4, 5, 9];
// let two = [3, 4, 99, 2, 2, 34, 4];
// console.log([...one, ...two]);

//?? join method
// console.log(one.join(''));

//!! NEW at method

// const arr = [23, 1, 22, 1];
// console.log(arr.at(0));

// console.log(arr.at(-1));
//?? for loop using at method
// for (let i = -1; i >= -arr.length; i--) {
//   console.log(arr.at(i));
// }

//!!! for each method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//?? using for of loop
// const deposit = [];
// const withdrawl = [];
// for (const [deposit,withdrawl] of movements) {
//   if (money > 0) {
//     deposit.push(money);
//   } else {
//     withdrawl.push(money);
//   }
// }
// console.log(deposit, withdrawl);

//?? using for each method

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else {
//     console.log(`you withdrawed ${movement}`);
//   }
// });

//?? so baiscally movement is an element passed for callback fucntion in each iteration resolving that array

//?? basic for each questions which i practiced

//todo : basic iteration
// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (num) {
//   console.log(num);
// });

//todo : sqaured values
// let numbers = [1, 2, 3, 4, 56];
// let newNum = [];
// numbers.forEach(function (num) {
//   newNum.push(num * num);
// });
// console.log(newNum);

//todo : arrray sum
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(function (num) {

//   sum += num;

// });
// console.log(sum);

//todo : find even numbers
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (num) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

//todo : modify orginal array

// let numbers = [1, 2, 3, 4, 5];
// let i = 0;
// numbers.forEach(function (num) {
//   numbers[i] = num * num;
//   i++;
// });
// console.log(numbers);

//todo : print index and value
// let numbers = [1, 5, 3, 4, 5];
// let i = 0;
// numbers.forEach(function (num) {
//   console.log(`Index=${i} and value=${num}`);
//   i++;
// });

//todo : count positive numbers
// let numbers = [1, -1, 2, -3, 4, -1, 2, 0];
// let count = 0;
// numbers.forEach(function (num) {
//   if (num >= 0) {
//     count++;
//   }
// });
// console.log(count);

//todo : string uppercase
// let strings = ['sagar', 'anaa', 'mila', 'ayg'];
// let newtrings = [];
// strings.forEach(function (string) {
//   newtrings.push(string.toUpperCase());
// });
// console.log(newtrings);

//todo : object properties

// const person = {
//   name: 'John',
//   age: 30,
//   occupation: 'Engineer',
// };

// Object.entries(person).forEach(function (key, value) {
//   console.log(`${key} = ${value}`);
// });
//?? if i do above i get key receives the inner array [name, 'John'] with index 0. value receives the inner array [age, 30] with index 1. beacuse object.entires retruns array o arrays , So, when you use forEach and provide two parameters, the first parameter (key) is assigned the entire inner array ([key, value]), and the second parameter (value) is assigned the index of the inner array in the outer array.

// const person = {
//   name: 'sagar',
//   class: '9th',
//   section: 'M',
// };
// Object.entries(person).forEach(function ([key, value]) {
//   console.log(key, value);
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 2, 33, 43, 4, 3];
// numbers.forEach(function (num, index, numbers) {
//   console.log(`${index} index , values is ${num}`);
// });

//!! for each with maps and sets

// const currency = new Map([
//   ['usd', 'american'],
//   ['ind', 'indian'],
//   ['pak', 'pakistan'],
// ]);
// // console.log(currency);

// const map = new Map([
//   [1, [2, 3]],
//   [2, [3, 4]],
//   [5, [6, 7]],
// ]);

// map.forEach(function (value, key, map) {
//   console.log(value, key, map);
// });

// //?? map expects array of arrays to create key and value pairs

// currency.forEach(function (value, key, map) {
//   console.log(value, key, map);
// });

//?? sets don't have index even though it works by for each

//!! Maps
//?? intializing with set method
// const rest = new Map();
// rest.set('name', 'sagar rdyy');
// rest.set('vitey', ['malasanda', '45']);
// console.log(rest);
//?? set chaining method
// const rest = new Map();
// rest.set('name', 'sagr').set('class', '12th').set('eduaction', 'btexh');
// console.log(rest);
//?? to retrive just use get method
// const dii = [1, 2];
// const rest = new Map();
// rest.set(dii, 'sagar');
// //?? this don't work because of refrnece type
// console.log(rest.get([1,2]));
// console.log(rest.get(dii));

//?? creating map usng arrays

// const ques = new Map([[]]);

//?? coding challenge - 1

// const julie = [3, 4, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// const checkDogs = function (dogJulia, dogKate) {
//   const [a, b, c, ...others] = dogJulia;
//   const newJulia = [b, c];
//   const totalDogs = [...newJulia, ...dogKate];

//   totalDogs.forEach(function (val, i) {
//     console.log(
//       `Dog number ${i + 1} whose age is ${val} is ${
//         val > 3 ? 'an adult' : 'a puppy'
//       } `
//     );
//   });
// };
// checkDogs(julie, kate);

//?? map method

// const euroToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

// console.log(movementsUSD);

// const movementsUSDFOR = [];
// for (const mov of movements) {
//   movementsUSDFOR.push(mov * euroToUsd);
// }
// console.log(movementsUSDFOR);

//?? map method using an arrow fucvntion
// const euroToUsd = 1.1;
// const movementsUSD = movements.map(mov => {
//   return mov * euroToUsd;
// });

// console.log(movementsUSD);

//?? object for each method (as js don't have for each for object but you can make it wokr like this )
// const sagar = {
//   name: 'sagar',
//   class: '6th',
//   food: ['id', 'don'],
// };

// Object.entries(sagar).forEach(function ([key, value], _) {
//   console.log(key);
//   console.log(value);
// });

//?? filter method

// const deposits = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(deposits);

//?? reduce method(boild down value into single array)
//?? first parameter is always accumaltor , it is like snowball that accumalate and grow big , so callback wil called in each iteration , it has otehr parameters to like acc,value,index,array

//?? intial value of accumaltor is 0
// const deposit = movements.reduce(function (acc, val, index, array) {
//   console.log(`Iteration ${index}: ${acc}`);
//   return acc + val;
// }, 0);

// console.log(deposit);

//?? anoither thing with reduce (finding maximum)
// const maximum = movements.reduce((acc, curr) => {
//   if (acc < curr) {
//     acc = curr;
//   }
//   return acc;
// }, movements[0]);

// console.log(maximum);

//?? magic of chaining methods (it's like pipelinling data)

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const mapMethod = movements
//   .filter(val => {
//     return val > 0;
//   })
//   .map(mov => {
//     return mov * 1.1;
//   })
//   .reduce((acc, val) => acc + val, 0);

// console.log(mapMethod);

//?? find method
//?? it won't return a new array but only first elenment which satify the condition  , filter returns a new array but find method only an eleemnt not an array
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const serc = movements.find(mov => mov < 0);
// console.log(serc);

//?? it is useful for secarhing objects

//!! find index method
//? it will return index not element

//!!! some and every , some is for includesof method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// const deposit = movements.some(mov => mov > 0);
// console.log(deposit);

// //?? evevry method (if all elements satisy condition)
// console.log(movements.every(mov=>mov>0));

//!! flat(no callbacks) and flatmap method
//?? flat method only goes 1 level deep abut we can make it deep by giving it arguments
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2, 3], 4], [4, [5, 6], 8], 9, 10];
// console.log(arrDeep.flat(3));

//!! sort
// let num = [100, -100, 222, 233, -1122, 22223, 0, -2112];
// num.sort((a, b) => {
//   return a > b ? -1 : 1;
// });

// console.log(num);
