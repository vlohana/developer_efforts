var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { action, autorun, observable } from "mobx";
const waitForPromise = () => new Promise(resolve => setTimeout(resolve, 1000));
export class PersonStore {
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
    updateFirstName(name) {
        this.firstName = name;
    }
    constructor(name) {
        /**
         * is State in MobX we want to track in our application
         * can be defined using observable decorator or function
         * evrything written inside observable block makes it as obsevable.
         *
         */
        Object.defineProperty(this, "firstName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.firstName = name;
        // makeObservable(this)
    }
}
__decorate([
    observable,
    __metadata("design:type", String)
], PersonStore.prototype, "firstName", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonStore.prototype, "updateFirstName", null);
const person = new PersonStore('Vinod');
autorun(() => {
    console.log('Person name is', person.firstName); // Access observable property here
});
person.updateFirstName("Vikki Lohana");
//# sourceMappingURL=PersonStore-1.js.map