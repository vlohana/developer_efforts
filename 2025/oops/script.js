/**
 * Prototypal Inheritance:
 *
 * In JavaScript object oriented consists of a prototypes,
 * and Object inherits from the Prototype of the class
 * therefor the behaviours and members are delegated to the class object of through ProtoType
 *
 * Exampl
 * e
 */
const num = [1, 2, 4]; // num is of type Array
console.log(typeof num); // object
console.log(num instanceof Array); //true (because all arrays are objects in JavaScript)
// num.map(); // num has access to the map and other Array function as it inherited through Prototype function

// ======================= /Constructor Functions /=======================

const Person = function (firstName, birthYear) {
  // class construcor in Vanilla JS
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   console.log(this);
  /** Never create a instance menthod inside constructor */
};
const vinod = new Person("Vinod", 1988);
// 1. new empty obj is created {}
// 2. function is called and this = {} (`this` will be point to the new object)
// 3. {} is linked to prototype
// 4. function automatically returns {}
console.log(vinod);

//======================= /Prototype / =======================
// to create class methods and behavior we use prototype
console.log(Person.prototype); ///
/** */
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};
vinod.calcAge();