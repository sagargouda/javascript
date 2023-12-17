//!! set has no duplicates in terms of aray
// const orderSet = new Set(['pasta', 'pasta', 'piza', 'pia']);

//!! set in terms of string
// console.log(new Set('sagar'));

//!! real example
// const orderSet = new Set(['pasta', 'pasta', 'piza', 'pia']);
// console.log(orderSet.size);
// console.log(orderSet.has('pasta'));
// orderSet.add('idli');
// console.log(orderSet);
//////////////////////////////////////////////////////////////////////////////////////////
//!! Maps
//?? ways to create a map
// const rest = new Map();
// rest.set('name', 'Classicao');
// rest.set(23, 'i think');
// rest.set('where', "i don't know");

// rest.set('categories', ['idli', 'vada']).set('open', 11).set('close', 12);
// console.log(rest);

//?? if map contains certain key
// console.log(rest.has('categories'));

//?? we can also having array as key
// const rest = new Map();
// const arr = [1, 2];
// rest.set(arr, 'sagar');
// we only get undefined because in heap when we pass [1,2] it is not same as [1,2] when we set so we  shoudl give that array to object and make it point
// console.log(rest.get(arr));

//!! map iteration
//?? now we can add something without using set methods
// it is same as object.entries ,

const question = new Map([
  ['question', 'what is the best programing language'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
// console.log(question);

// convert object to maps
// const sagar = {
//   name: 'sagar',
//   class: '10th',
// };
// const reddy = new Map(Object.entries(sagar));
// console.log(reddy);

//?? for loop for maps
// for (const [key, value] of question) {
//   console.log(key, value);
// }

//?? convert map to arrays
// console.log(...question);
console.log(...question.keys());

//?? when to use these data structures
//!! 1) from program itseself  = data written directly in source code
//!! 2) from UI = data from user or data writtenn in DOM
//!! 3) from external source = data fetched for example web api

//?? it is al colection of data so we strore in data structure
//?? simple list of value = arrays or sets
//?? for key value of pairs = objects or maps

//?? when to use them

//!! array
// when we need ordered list of value with duplicates , use when you need to manipulate data
//!! set
// when working with unique value , use when high performance is needed
//!! object
// more tradiditonal key valye pair , easierr to write and access values with . and  [ ] , use when you need to include fucntion(methods ) , use when working wuith json(can vonevrt to map)

//!! maps
// better performanvce , keys can have any data type , easy to iterate , use when you simply need to map a key to value , use when you need keys that are not strings
