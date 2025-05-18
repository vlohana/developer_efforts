import { action, autorun, computed, makeObservable, observable, reaction, runInAction, when } from "mobx"
import { resolve } from "path";

const waitTimeOut = () => new Promise((resolve) => setTimeout(resolve, 1000))

class PersonStore {

  @observable
  firstName: string = '';

  @observable
  lastName: string = "";

  @observable
  age: number = 0;

  @observable
  canApplyForLicense: boolean = false;

  @observable
  dollars: number = 10;


  constructor(fName: string, lName: string) {
    this.firstName = fName;
    this.lastName = lName;
    makeObservable(this)
    when(() => this.age > 18,
      () => this.checkLicenseAgeLimit()
    )
  }

  @action
  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  @action
  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  @action
  setAge(age: number) {
    this.age = age;
  }


  @action
  setFullName(fName: string, lName: string) {
    this.setFirstName(fName);
    this.lastName = lName;
  }

  @action
  checkLicenseAgeLimit() {
    this.canApplyForLicense = true
  }

  @computed
  get euros() {
    console.log('calculating euros')
    return this.dollars * 2;
  }



}

const person = new PersonStore("Vinod", "Lohana")
console.log('new person : ', person);

autorun(() => {
  // console.log(`Person name updated: ${person.firstName}  ${person.lastName} ${person.age}, ${person.canApplyForLicense}," euros:", ${person.euros}`);
  console.log(`Autorun: Euros: ${person.euros}`);
})
console.log(person.euros);//if is accessed from reaction then the computation is cached and not recalled.
console.log(person.euros);//if is accessed from reaction then the computation is cached and not recalled.
console.log(person.euros);//if is accessed from reaction then the computation is cached and not recalled.
console.log(person.euros);//if is accessed from reaction then the computation is cached and not recalled.

// person.setFirstName("Mobx");// method 1
// person.setLastName('New')
person.setFullName("Vikki", "Lohana"); //batched updates both first and lastname.

person.setAge(15); // here the observable is already tru and there is no change due to when is executed once.
// when second time a age > 18 condition satisfied the reaction will be called and there is a state change
// of canApply then only reaction is called.

const disposer = reaction(() => person.canApplyForLicense == true,
  () => console.log("Hurray ! you can apply for license")
)
person.setAge(25);

if (person.canApplyForLicense) {
  disposer();
}




/** Async mode batching do not take place. */
// runInAction(async () => {
//   person.firstName = "Mobx F";
//   await waitTimeOut();
//   person.lastName = "New lastName"

// })



// action: method -2 
// runInAction(()=>{
//   person.firstName= "Mobx New"
// })

// // action : method -3
// const updaterFn = action(()=>{
//   person.firstName = "Mobx New";
// })
// updaterFn();

// person.setFullName("Vikki","")
export { }