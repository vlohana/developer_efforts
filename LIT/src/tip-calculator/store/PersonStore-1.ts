import { action, autorun, makeObservable, observable, runInAction } from "mobx";

const waitForPromise = () => new Promise(resolve => setTimeout(resolve, 1000));

export class PersonStore {

  /**
   * is State in MobX we want to track in our application
   * can be defined using observable decorator or function 
   * evrything written inside observable block makes it as obsevable.
   * 
   */
  @observable
  firstName: string;

  // @observable
  // lastName: string = "Lohana"


  /**
   * . Use to update the state 
   * . There are 3 ways to update state with actions
   *         -> decorator
   *         -> action function
   *         -> "runInAction" function
   * . All updates inside the action are batched.
   * . Actions do not support async execution so everything updated after the async code will be
   *   executed in next batch
   * . 
   * @param fName 
   */
  @action
  updateFirstName(name: string) {
    this.firstName = name;
  }

  constructor(name: string) {
    this.firstName = name;
    // makeObservable(this)
  }

}

const person = new PersonStore('Vinod');
autorun(() => {
  console.log('Person name is', person.firstName);  // Access observable property here
});

person.updateFirstName("Vikki Lohana");