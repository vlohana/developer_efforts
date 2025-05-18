const fruits = new Array("chikku", "kiwi", "banana", "apple"); //["apple", "banana", "kiwi"];
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits);

// fruits.forEach((fruit) => console.log("f: ", fruit));
function loop(val) {
  console.log(val);
}
for (let f of fruits) {
  console.log(f);
}
console.log(`0------0`);
fruits.forEach(() => loop);


const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];
const points = [40];
const ppoints = new Array(40);
points;
ppoints;
let type = typeof fruits;
console.log(type)
console.log(fruits instanceof(Array) )
fruits.push('watermelon');
fruits;
fruits.pop()
fruits;
fruits.splice(0,1);
fruits;
console.log(fruits.toString())

const ffruits = ["Banana", "Orange", "Apple", "Mango"];
// let fuits = ffruits.at(2);
//join all elements into single ==> 'chikku->banana->apple'
console.log(fruits.join('->'));
//shift method removes the first array element and "shifts" all other elements to a lower index
console.log(fruits.shift());
fruits;
// adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(fruits.unshift('pineapple','grapes'));
fruits;