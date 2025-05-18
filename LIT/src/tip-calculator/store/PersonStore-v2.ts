import { action, autorun, makeObservable, observable, runInAction } from "mobx";
import { resolve } from "path";

  //  const waitForPromise = () => new Promise(resolve => setTimeout(resolve, 5000))
   const waitForPromise = () => new Promise(resolve => setTimeout(resolve, 10000));


class Person {

  @observable
  firstName: string;

  @observable
  lastName: string;


  /** When first name is updated this is invoked */
  // @action
  // updateFirstName(name: string) {
  //   console.log('updated firstname')
  //   this.firstName = name;
  // }

  /** When last name is updated this is invoked */
  // @action
  // updateLastName(lastName: string) {
  //   console.log('updated lastname')
  //   this.lastName = lastName;
  // }

  /** batching the actions call to invoke one call */
  // @action
  // updateFullName(firstName: string, lastName: string) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // }


  constructor(fName: string, lastName: string) {
    this.firstName = fName;
    this.lastName = lastName;
    // Enable MobX decorators
    makeObservable(this);
  }
}

const person = new Person('Vinod', "Lohana");
autorun(() => {
  console.log('Person name is', person.firstName, person.lastName);
});

runInAction(async () => {
  person.firstName = "VIkki";
  await waitForPromise();
  person.lastName = "Lohana"
})
// person.updateFirstName("Vikki"); // invoke firstname action
// person.updateLastName("Chachwani") // invoke lastname action

// person.updateFullName("Vikki", "Lohana");

