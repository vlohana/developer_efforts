//object literal
let a = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(a.firstName);

let b = { ...a, height: 181 }; //spread opeation
console.log(b);
const { height: h, firstName: f } = b;
// console.log(`h: ${height} f: ${firstName}`);
console.log(`h: ${h} f: ${f}`);
console.log(b);

let c = new Object();
c.firstName = "Vinod";
c.lastName = "Lohana";
c.age = 36;
c.height = 172;

console.log(c["firstName"]);
console.log(a.fullName());
a.nationality = "INDIAN"; // adding a property
console.log(a);
delete a.nationality;
console.log(a); // deleting a property

for (prop in a) {
  console.log("-->", `${prop}=>${a[prop]}`);
}
console.log(Object.values(a));

for (let [prop, val] of Object.entries(a)) {
  console.log(`${prop}: ${val}`);
}

function Student(name, rollnumber, section, age, gender) {
  this.name = name;
  this.rollnumber = rollnumber;
  this.section = section;
  this.age = age;
  this.gender = gender;
  fullName = function(){

  }
}

Student.prototype.nationality = "INDIAN";
const vinod = new Student("Vinod", "1VI06TE047", "BEII", 36, "Male");
// vinod.nationality = "INDIAN";
const ravi = new Student("Ravi", "1VI06TE052", "BEIII", 40, "Male");
console.log(vinod);
console.log(ravi);

const userName = {
  // Intentionally sending all 3 names (fullName, firstName, and lastName).
  // This is to allow the localization team have the flexibility to pick
  // out of the three on what to display based on the language.
  fullName: 'vinod lohana',
  firstName: 'vinod',
  lastName: 'lohana'
}

console.log('00>',...userName);