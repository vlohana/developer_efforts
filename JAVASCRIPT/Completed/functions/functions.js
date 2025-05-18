function sum(a, b) {
  console.log(
    typeof a === "number" && typeof b === "number" ? a + b : "Invalid Input"
  );
}

sum(2, 3);
sum(2.2, 3);
sum("2", 3);
sum(2, false);
sum(2, "apple");

function sumAll(...a) {
  let sum = 0;
  for (let i of a) {
    if (typeof i === "number") sum += i;
  }
  console.log(sum);
}
sumAll(1, 2, 3, 4, 5, 6);
sumAll(1, 2, "3");
sumAll(1, 2, 3.322, 2.3424);

let x = function (...a) {
  let sum = 0;
  a.forEach((v) => {
    sum += v;
  });
  return sum;
};

let y = function (...v) {
  console.log(v.join());
};
console.log(x(1, 2, 3, 4, 5));
y(1, 2);

nMultiply = (...c) => {
  let result = 1;
  c.forEach((d) => {
    result *= d;
  });
  return result;
};
console.log(nMultiply(1, 2));
