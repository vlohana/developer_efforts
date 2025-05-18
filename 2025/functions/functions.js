const bookings = [];

const createbooking = function (
  flightNum,
  numPassengers = 5,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createbooking("A123");
createbooking("A123", 10, 800);
createbooking("A123", 20, 1000);
createbooking("A123");

// funtion accepting call function
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

// upper first word
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original : ${str}`);
  console.log(`transformed: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
};

transformer("lone wolf", upperFirstWord); // LONE wolf
transformer("lone wolf", oneWord);

// Higher order function returnign a function

function greet(msg) {
  return function (personName) {
    console.log(`${msg} ${personName}`);
  };
}

const greetArrow = (msg) => (personName) => console.log(`${msg} ${personName}`);

const greeter = greet("Good morning");
greeter("Vinod");
greet("Good night")("Vikki");
greetArrow("Hello")("Vinod");

//=========================== / Call bind / ====================================

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight
            ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const book = lufthansa.book; // store function in another variable.

// lufthansa.book(239, "Vinod Lohana");
// lufthansa.book(635, "Beena .");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss Air lines",
  iataCode: "LX",
  bookings: [],
};

// eurowings.book(112, "Shreya Dasgupta");
// eurowings.book(111, "Sunil Khilani");

// Does not work; as the `this` keyword is not pointing to any of the object we get undefinded for `this.prop`
// book(123, "Ravi Lohana"); // Out: Ravi Lohana booked a seat on `undefined` flight `undefined123`

// To fix we can use apply| call functions
// Output: Ravi Lohana booked a seat on Eurowings flight EW123
book.call(swiss, 123, "Ravi Lohana");
book.call(swiss, 4321, "Rekha Lohana");
book.call(swiss, 123, "Reena Lohana");

book.call(lufthansa, 786, "VINOD LOHANA");
book.call(lufthansa, 786, "Beena .");
book.call(lufthansa, 786, "Roopomal Lohana");

book.call(eurowings, 11231, "John Doe");

// apply do not recives list of argument but rather Array of argument
const flightData = [435, "John Doe"];
const flightData2 = [2135, "John Cena"];
book.apply(eurowings, flightData);
book.call(eurowings, ...flightData2);

// ================================== /bind function/ ===================================================

// eurowings.book(1123, "Tony Stark");
// bind returns new function with the this implied
const bookEw = book.bind(eurowings);
const bookLh = book.bind(lufthansa);
const bookSw = book.bind(swiss);
bookEw(1192, "Vikki Lohana");

// bind function also allows to present the arguments
const book123 = book.bind(eurowings, 123);
book123("Satish Chachwani");
book123("Barkha Chachwani");
book123("Komal Chachwani");
book123("Gobind Chachwani");

//with Eventlisteners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log("this: ", this);
  this.planes++;
  console.log(`planes: ${this.planes}`);
};

//By default the `this` keyword in eventlistener is attached
// to the element for which eventlistener is called.
// `this`--> button-buyplane
// document
//   .querySelector(".btn--buy-plane")
//   .addEventListener("click", lufthansa.buyPlane);// buttn in this case

document
  .querySelector(".btn--buy-plane")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application (present arguments using bind)
const addTax = (rate, value) => value + value * rate;
console.log("calculate tax....", addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // as `this` is not required in this
console.log(addVAT(100));
console.log(addVAT(23));

const calcTax = function (rate = 0.23) {
  return function (value) {
    return value + value * rate;
  };
};
const calVat = calcTax(0.23);

console.log("calc vat.....", calcTax()(100));
console.log(calcTax()(23));

console.log("calc vat.....", calVat(100));
console.log(calVat(23));
