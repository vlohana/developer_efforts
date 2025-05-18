var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { action, autorun, computed, makeObservable, observable, reaction, when } from "mobx";
const waitTimeOut = () => new Promise((resolve) => setTimeout(resolve, 1000));
class PersonStore {
    constructor(fName, lName) {
        Object.defineProperty(this, "firstName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "lastName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "canApplyForLicense", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "dollars", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 10
        });
        this.firstName = fName;
        this.lastName = lName;
        makeObservable(this);
        when(() => this.age > 18, () => this.checkLicenseAgeLimit());
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setAge(age) {
        this.age = age;
    }
    setFullName(fName, lName) {
        this.setFirstName(fName);
        this.lastName = lName;
    }
    checkLicenseAgeLimit() {
        this.canApplyForLicense = true;
    }
    get euros() {
        console.log('calculating euros');
        return this.dollars * 2;
    }
}
__decorate([
    observable,
    __metadata("design:type", String)
], PersonStore.prototype, "firstName", void 0);
__decorate([
    observable,
    __metadata("design:type", String)
], PersonStore.prototype, "lastName", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PersonStore.prototype, "age", void 0);
__decorate([
    observable,
    __metadata("design:type", Boolean)
], PersonStore.prototype, "canApplyForLicense", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], PersonStore.prototype, "dollars", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonStore.prototype, "setFirstName", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonStore.prototype, "setLastName", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PersonStore.prototype, "setAge", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PersonStore.prototype, "setFullName", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonStore.prototype, "checkLicenseAgeLimit", null);
__decorate([
    computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], PersonStore.prototype, "euros", null);
const person = new PersonStore("Vinod", "Lohana");
console.log('new person : ', person);
autorun(() => {
    // console.log(`Person name updated: ${person.firstName}  ${person.lastName} ${person.age}, ${person.canApplyForLicense}," euros:", ${person.euros}`);
    console.log(`Autorun: Euros: ${person.euros}`);
});
console.log(person.euros); //if is accessed from reaction then the computation is cached and not recalled.
console.log(person.euros); //if is accessed from reaction then the computation is cached and not recalled.
console.log(person.euros); //if is accessed from reaction then the computation is cached and not recalled.
console.log(person.euros); //if is accessed from reaction then the computation is cached and not recalled.
// person.setFirstName("Mobx");// method 1
// person.setLastName('New')
person.setFullName("Vikki", "Lohana"); //batched updates both first and lastname.
person.setAge(15); // here the observable is already tru and there is no change due to when is executed once.
// when second time a age > 18 condition satisfied the reaction will be called and there is a state change
// of canApply then only reaction is called.
const disposer = reaction(() => person.canApplyForLicense == true, () => console.log("Hurray ! you can apply for license"));
person.setAge(25);
if (person.canApplyForLicense) {
    disposer();
}
//# sourceMappingURL=PersonStore.js.map