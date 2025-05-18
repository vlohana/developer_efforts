function multiply(a, b) {
  return a * b;
}

function add(...a) {
  console.log(a.reduce((start_value, a) => start_value + a, 10));
}

function multiply(...a) {
  return a.reduce((i, a) => i * a, 1);
}

add(1, 2, 3, 4);

console.log(multiply(11, 12, 13, 14));

let k = (...b) => b.reduce((i, b) => b + i, 0);
console.log(k(1, 2, 3, 4, 5));
