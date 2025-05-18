var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autorun, makeObservable, observable, runInAction } from "mobx";
//  const waitForPromise = () => new Promise(resolve => setTimeout(resolve, 5000))
const waitForPromise = () => new Promise(resolve => setTimeout(resolve, 10000));
class Person {
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
    constructor(fName, lastName) {
        Object.defineProperty(this, "firstName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.firstName = fName;
        this.lastName = lastName;
        // Enable MobX decorators
        makeObservable(this);
    }
}
__decorate([
    observable,
    __metadata("design:type", String)
], Person.prototype, "firstName", void 0);
__decorate([
    observable,
    __metadata("design:type", String)
], Person.prototype, "lastName", void 0);
const person = new Person('Vinod', "Lohana");
autorun(() => {
    console.log('Person name is', person.firstName, person.lastName);
});
runInAction(async () => {
    person.firstName = "VIkki";
    await waitForPromise();
    person.lastName = "Lohana";
});
// person.updateFirstName("Vikki"); // invoke firstname action
// person.updateLastName("Chachwani") // invoke lastname action
// person.updateFullName("Vikki", "Lohana");
//# sourceMappingURL=PersonStore-v2.js.map