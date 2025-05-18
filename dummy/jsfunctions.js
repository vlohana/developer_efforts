function Examination(rollnumber, section) {
  this.rollnumber = rollnumber;
  this.section = section;
  isEligble = function (name, subject, attdanceCount) {
    console.log(
      `${name} has attended ${attdanceCount} classes out of 100 for subject ${subject}`
    );
    console.log(
      `checking eligiblity: ${attdanceCount > 50 ? "Eligible" : "Not Eligible"}`
    );
  };
}

let person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  isEligble: function (name, subject, attdanceCount) {
    console.log(
      `${name} has attended ${attdanceCount} classes out of 100 for subject ${subject}`
    );
    console.log(
      `checking eligiblity: ${attdanceCount > 50 ? "Eligible" : "Not Eligible"}`
    );
  },
};

let person2 = {
  firstName: "Vinod",
  lastName: "Lohana",
  age: 35,
  eyeColor: "Brown",
};

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// let fullName = person.fullName.bind(member);

console.log(person1.fullName.call(person2));
console.log(person1.fullName.apply(person2));
person1.isEligble.call(person2, person2.firstName, "English", 70);
person1.isEligble.apply(person2, [person2.firstName, "English", 70]);

const arr = [3, 13, 134, 112, -12, 341, 345, 876, 123];
// console.log(Math.max.apply(arr));
console.log(Math.max.apply(null, arr));
// console.log(Math.max.call(null,arr)); this do not work

let fullName = person1.fullName.bind(person2);
console.log(fullName()); // bind will borrow a method from the called object

let isEligible = person1.isEligble.bind(
  person2,
  person2.firstName,
  "Hindi",
  50
);
isEligible(); // bind will borrow a method from the called object
console.log("start");
setTimeout(() => {
    let d = new Date();
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
    console.log("stop",d);
}, 5000);
