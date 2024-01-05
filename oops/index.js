"use strict";
//procedural programmming
// const data = "SAGAR";
// console.log(data.toLowerCase());

// fucntional programming

// function lower(data) {
//   return data.toLowerCase();
// }
// console.log(lower(data));

// OOPs
// class lowercase {
//   constructor(data) {
//     this.data = data;
//   }
//   lowercase() {
//     console.log(this.data.toLowerCase());
//   }
// }

// const sagar = new lowercase("SAGARA");
// sagar.lowercase();

//!! constructor fucntions and new operator

// const Person = function (firstName, birthYear) {
//   //?? instance properties
//   this.pehlanaam = firstName;
//   this.janamsaal = birthYear;

//?? methods (bad practice never create metho in constrcutor fucntion beacuse when you create 1000 of perswon object so it can create 1000 copies of this fucntion and memory also grows here  )
// this.calcAge = function () {
//   console.log(2037 - this.janamsaal);
// };
// };
// const sagar = new Person("sagar", 2002);
// console.log(sagar);
// const ana = new Person("ana", 2001);
// console.log(ana);
// console.log(sagar, ana);
// console.log(sagar instanceof Person);

//!! Protoype

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// //?? prtototype methods
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const sagar = new Person("sagar", 2002);
// sagar.calcAge();
// console.log(sagar.__proto__);

//?? person prtotype is not prtotoype of person but it is what's gonna be used as a protype of all the objects that are created with constructor fucntions

//!! seting properties
// Person.prototype.species = "MAle";
// console.log(sagar.species);

//!! prototypal inheritance and protypal chain

// const Country = function (male, female) {
//   this.male = male;
//   this.female = female;

//   console.log(this);
// };

// Country.prototype.literacy = function () {
//   console.log(
//     `male strength is ${this.male}% and female strength is ${this.female}%`
//   );
//   console.log(this);
// };

// const india = new Country("56", "67");
// india.literacy();

//! practical example

// const War = function (country,people) {
//  this.country = country;
//  this.people = people;
// }

// War.prototype.checkwinrate= function(){
//    console.log(`the win rate of ${this.country} is ${this.people / 20}%`);
// }

// const india = new War("india", 100)
// india.checkwinrate()

//!! protypical inheritance on built object such as objects

// const War = function (country,people) {
//  this.country = country;
//  this.people = people;
// }

// War.prototype.checkwinrate= function(){
//    console.log(`the win rate of ${this.country} is ${this.people / 20}%`);
// }

// War.prototype.continent = "Asia"


// const india = new War("india", 100)
// india.checkwinrate()
// console.log(india.continent);

// console.log(india.__proto__);
// //?? moving up in prototype chain
// console.log(india.__proto__.__proto__);
// //!! even war protoypew has it's constructor property
// console.dir(War.prototype.constructor)

//!! protypical inheritance in array

// const sagar = [2, 3, 44, 3, 2, 22]
// console.log(sagar.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)]
// }

// console.log(sagar.unique());

// Array.prototype.special = function () {
//  return this.filter((element) => element > 8)
// }
// console.log(sagar.special());

//?? creating an array method for myself

// const sagar = [-1, -2, 0, 3, 4, 42, 21, 2, 3];

// Array.prototype.high = function () {
//  const make = this.filter((el) => el > 0)
//  return [...new Set(make)]
// }

// console.log(sagar.high());
//?? so here high creates new array
// console.log(sagar == sagar.high());

//!! imoortant to note when you are using this tactic remeber to not to english keywords which means like unique , special etc because js make create those methods in next version so use generic names if array name is sagar use sagar_numb (only do tis in personal project)

//?? some more coding challenges

// const Car = function (make , speed) {
//  this.make = make;
//  this.speed = speed;
// }
// Car.prototype.accelerate = function () {
//  console.log(this.speed += 10);
// }

// Car.prototype.brake = function () {
//  console.log(this.speed -= 5);
// }

// const BMW = new Car("BMW", 120)
// BMW.accelerate();
// BMW.brake()
// BMW.accelerate();
// BMW.brake()
// BMW.accelerate();
// BMW.brake()

// const Mercedes = new Car("mercedes", 95)
// Mercedes.accelerate()
// Mercedes.brake()


//!!! ES6 classes(bTS even classes are fucntions)
//class expression
// const Person1 = class {
 
// }
//class declaration
// class Person{
//  //?? method of person class
//  constructor(firstName , birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//  }
//  //methods will be added to .protoype property
//  calcAge() {
//   console.log(2037 - this.birthYear);
//  }
// }

// const sagr = new Person('sagar', 2002)
// sagr.calcAge()
// console.log(sagr);
// console.log(sagr.__proto__);


//!! setters and getters

// const account = {
//  owner: "sgaar",
//  movements: [200, 300, 400, 500],
 
//  get latest() {
//   return this.movements.slice(-1).pop()
//  },
//  set latest(mov) {
//   this.movements.push(mov)
//  }
// }
// account.latest = 700
// console.log(account.latest);


//!! in terms of classes
// class country{
//  constructor(name, strength) {
//   this.name = name;
//   this.stregth = strength;
//  }
 
//  war() {
//   console.log(`war is between ${this.name} and china`);
//  }
//  set warDetails(country) {
//   this.country = country
//  }
//  get warDetails() {
//   return this.country
//  }
// }
// const india = new country("india", "30 million")
// india.war()
// india.warDetails = "china"
// console.log(india.warDetails);
// console.log(india);

//!! static method

// const name = parseInt("1233")
// console.log(name + 123);

//  class country{
//  constructor(name, strength) {
//   this.name = name;
//   this.stregth = strength;
//  }
 
//  war() {
//   console.log(`war is between ${this.name} and china`);
//  }
//  set warDetails(country) {
//   this.country = country
//  }
//  get warDetails() {
//   return this.country
//   }
//   static makeCountry() {
//    console.log('Hey there');
//   }
// }
// //?? statsic method for class not for instance
// country.makeCountry()
// // india.makeCountry()
// const india = new country("india", "30 million")
// india.war()
// india.warDetails = "china"
// console.log(india.warDetails);
// console.log(india);


//!! coding chalenge 2
// class Car {
//  constructor(make, speed) {
//   this.make = make;
//   this.speed = speed;
//  }
//  //?? methods
//  accelerate() {
//   console.log(this.speed+=10);
//  }
//  brake() {
//   console.log(this.speed-=10);
//  }
//  //?? getters and setters
//  get speedUS() {
//   return this.speed / 1.6
//  }
//  set speedUS(speed) {
//   this.speed = speed * 1.6;
//  }
// }

// const ford = new Car("ford", 120)
// ford.speedUS = 220
// console.log(ford);

//!! coding challenge - 3
// class Movie{
//  constructor(title, movieStar) {
//   this.title = title;
//   this.movieStar = movieStar
//  }
//  //?? methods for this class
//  who() {
//   console.log(this.movieStar);
//  }
//  name() {
//   console.log(this.title);
//  }
//  get newMovie() {
//   return this.title
//  }
//  set newMovie(movie) {
//   this.title = movie.toUpperCase()
//  }
// }

// const july = new Movie("july", "ram charan")
// july.newMovie = "july";
// console.log(july.newMovie)

//!! inheritance between classes and constrcutror fucntions

// const Person = function (firstName, birthYear) {
//  this.firstName = firstName;
//  this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//  console.log(2037 - this.birthYear);
// }
// //?? inherited
// const student = function (firstName , birthYear , course) {
//  Person.call(this, firstName, birthYear)
//  this.course = course
// }
// student.prototype = Object.create(Person.prototype)
// const sagr = new student("sagar", 18)
// sagr.calcAge()

//?? inheritance example in constructor fucntion

// const India = function (name, language,population) {
//  this.name = name;
//  this.language = language;
//  this.population = population
// }
// India.prototype.what=function(){
//  console.log(`${this.name} has majorly ${this.language} language and population of ${this.population}`);
// }

// const india = new India("india", "hindi", "2 billion")
// india.what()

// //?? inheriting state
// const karnataka = function (name, language, population, majority) {
//  India.call(this, name, language, population)
//  this.majority = majority
// }
// karnataka.prototype = Object.create(India.prototype)

// const karnataka = new karnataka("karnataka","kannada ")

//!!! inheritance in classes
// class country {
//  constructor(name, poplulation) {
//   this.name = name;
//   this.poplulation = poplulation
//  }
//  country() {
//   console.log(`${this.name} has a population of ${this.poplulation}`);
//  }
// }
// const india = new country("india", "2 billion")
// india.country()

// class china extends country{
//  constructor(name, poplulation,language) {
//   super(name, poplulation)
//   this.language = language
//  }
//  languagee() {
//   console.log(`${this.name} has a population of ${this.poplulation} and ${this.language}`);
//  }
// }
// const chinaa = new china("china", "4billion", "mandalarian")
// chinaa.languagee()


//!! encapslation (data privacy)(protected method)
// # =private field