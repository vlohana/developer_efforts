let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// slice: return new array and slices from the start index to end index

//SLICE
console.log(arr.slice(2, 5)); // ['c', 'd', 'e']
console.log(arr.slice(4)); // ['e', 'f', 'g', 'h', 'i', 'j']

// SPLICE changes existing array and returns the removed elements
// console.log(arr.splice(2)); // ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// console.log(arr); // ['a', 'b']
arr.splice(-1); // ['j'] removes last element
console.log(arr); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

arr.splice(1, 2); // ['b', 'c'] removes 2 elements starting from index 1
console.log(arr); // ['a', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// REVERSE
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); // ["f", "g", "h", "i", "j"]
console.log(arr2); // ["f", "g", "h", "i", "j"] changes the original array

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // ["a", "d", "e", "f", "g", "h", "i", "j", "f", "g", "h", "i", "j"]
// do not change the original array

// JOIN
console.log(letters.join(" - ")); // a - d - e - f - g - h - i - j - f - g - h - i - j
// converts array to string and joins with the separator

// At method

const vowels = ["a", "e", "i", "o", "u"];
console.log(vowels.indexOf("e")); // 1
console.log(vowels[1]); // e

//getting last element
console.log(vowels[vowels.length - 1]); // u
console.log(vowels.splice(-1)[0]); // u
console.log(vowels.at(-1)); // u

// looping over arrays

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---------- FOREACH ----------");
movements.forEach((movement) => {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// ForEach for map

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`Key : ${key}, Value : ${value}`);
});

const currencies2 = new Set(["USD", "GBP", "USD", "EUR", "EUR", "INR"]);
currencies2.forEach(function (value, _, map) {
  console.log(`Value : ${value}, _`);
});

////////////////////////////////////

// Map Method
/**
 *  creates a new array by calling the callback function on each element of the input array
 */

const euroToInr = 89;
// const movementsInr = movements.map(function(mov){
//   return mov * euroToInr;
// })
const movementsInr = movements.map((mov) => mov * euroToInr);
console.log(movementsInr);
console.log(movements);

const movmentsDescription = movements.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i + 1} : You deposited ${mov}`;
  } else {
    return `Movement ${i + 1} : You deposited ${mov}`;
  }
});

console.log(movmentsDescription);

// Filter Method
const deposits = movements.filter((mov) => mov > 0);
const withdrawals = movements.filter((mov) => mov < 0);

console.log(deposits);
console.log(withdrawals);

// Reduce Method

const initialValue = 0; // initial value for the iteration
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i} : ${acc}`);
  return acc + curr;
}, initialValue);
console.log(`Balance in account: ${balance}`);
