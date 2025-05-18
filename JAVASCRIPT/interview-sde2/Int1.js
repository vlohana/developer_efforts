const a = 10;
const b = 10;

const object1 = { b: "c", d: "e" },
  object2 = { d: "e", b: "c" },
  object3 = { b: "c", d: "e" },
  object4 = object1;

console.log(a == b); // true:  type coercion || loose equality || compare two val
console.log(a === b); // false : strict equality

let c = null;
console.log(typeof c); // object : null is object
console.log(typeof object1); // object

console.log(object1 === object2); // false : compare reference (object1 and object2 are different)
console.log(object1 === object3); // false : compare reference (object1 and object3 are different)
console.log(object1 === object4); // true : compare reference (object1 and object4 are same)

let d = new Date();
let e = new Date();
console.log("date obj compare", d === e); // false : compare reference (d and e are different)
console.log("date  reference compare", d.getTime() === e.getTime()); // true : compare value (d and e are same)
