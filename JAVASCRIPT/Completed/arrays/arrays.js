//create array

let a = [];
let a1 = new Array();

a = [10];
a1 = new Array(10);

a = [1, 2, 3];
a1 = new Array(1, 2, 3);

console.log(a1, a);
console.log(a.length, a1.length);

let sweetFruits = [
  "apple",
  "mulberry",
  "cherry",
  "watermelon",
  "guaua",
  "BANANA",
  "Banana",
  "banana",
];
let sourfruits = [
  "kiwi",
  "strawberry",
  "grapes",
  "blackberry",
  "orange",
  "pineapple",
];

let fruits = sweetFruits.concat(sourfruits);

let newArr = fruits.map((v) => {
  //   delete fruits[v];
  fruits.pop(v);
});
let duplicatesInArray = fruits.filter((fruit) => fruit.includes('a'));
duplicatesInArray;

console.log(fruits);
console.log(newArr);

console.log(fruits);
console.log(fruits.indexOf("muskmelon")); //search for element
console.log(fruits.includes("apple")); //check if element existin in fruits
const isFound = fruits.find((f) => f === "Apple");
isFound;

console.log(sweetFruits, sweetFruits.length);

let newSour = sourfruits.slice(1, 4); // return new array of deleted items + do not modifies existing array immutable.
let newSweet = sweetFruits.splice(0, 2); // return new array of deleted items + modifies existing array mutable
// add items to the array sweetFruits.splice(2,0,"Lemon") adds lemin at 2 and delet
// 0 items and modify existing array

console.log(sweetFruits);
console.log(newSweet);

console.log(sourfruits);
console.log(newSour);

delete fruits[0]; // leaves undeifine holes in arry
fruits.pop(); // delete last element do not leave undefined holes in array
console.log(fruits[fruits.length - 1]);
fruits.push("pineapple"); // adds to the last element
console.log(fruits[fruits.length - 1]);

console.log(sweetFruits[0], sweetFruits.length);
console.log(sourfruits[0], sourfruits.length);
console.log(fruits, fruits.length);

// fruits = ["muskmelon",...fruits];

console.log(fruits["0"]);
