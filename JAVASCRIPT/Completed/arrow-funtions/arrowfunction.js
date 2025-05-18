//multi arg
function sum(a, b) {
  return a + b;
}

// arrow functio
let sum2 = (a, b) => {
  return a + b;
};

// 1 arg
function isPositive(number) {
  return a > 0;
}

// 1 arg
let isPositive = (number) => a > 0; //for single arg we can remove paranthesis

// no arg
let randomNumber = () => Math.random;

//anonymous function
document.addEventListener("click", function () {
  console.log("Clicked");
});

document.addEventListener("click", () =>  console.log("Clicked"));


// ARROW FN MAKES MORE SENSE WHEN DEALING WITH GLOBAL SCOPE TO RESOVE `this` keyword
