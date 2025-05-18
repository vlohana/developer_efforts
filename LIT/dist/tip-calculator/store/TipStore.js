var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { action, computed, makeObservable, observable } from "mobx";
class TipStore {
    setBillAmount(billAmount) {
        this._billAmount = billAmount;
    }
    updateRatingForService(choice) {
        this._rating = choice;
    }
    updateRatingByFirstPerson(choice) {
        this._ratingByFirstPerson = choice;
    }
    updateRatingBySecondPerson(choice) {
        this._ratingBySecondPerson = choice;
    }
    get actualBillAmount() {
        return this._billAmount;
    }
    get currentRating() {
        console.log(`changed rating: ${this._rating}`);
        return this._rating;
    }
    get currentFirstRating() {
        console.log(`changed rating: ${this._ratingByFirstPerson}`);
        return this._ratingByFirstPerson;
    }
    get currentSecondRating() {
        console.log(`changed rating: ${this._ratingBySecondPerson}`);
        return this._ratingBySecondPerson;
    }
    get finalBillAmount() {
        return this.actualBillAmount + (this.actualBillAmount) * ((this.currentFirstRating + this.currentSecondRating) / 2) / 100;
    }
    // disposerRating1 = reaction(() => this._rating, () => {
    //     console.log(`rating changed: ${this._rating}`)
    // })
    constructor() {
        Object.defineProperty(this, "_billAmount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_rating", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_ratingByFirstPerson", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_ratingBySecondPerson", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        makeObservable(this);
    }
}
__decorate([
    observable,
    __metadata("design:type", Number)
], TipStore.prototype, "_billAmount", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], TipStore.prototype, "_rating", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], TipStore.prototype, "_ratingByFirstPerson", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], TipStore.prototype, "_ratingBySecondPerson", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipStore.prototype, "setBillAmount", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipStore.prototype, "updateRatingForService", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipStore.prototype, "updateRatingByFirstPerson", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipStore.prototype, "updateRatingBySecondPerson", null);
__decorate([
    computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TipStore.prototype, "actualBillAmount", null);
__decorate([
    computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TipStore.prototype, "currentRating", null);
__decorate([
    computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TipStore.prototype, "currentFirstRating", null);
__decorate([
    computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TipStore.prototype, "currentSecondRating", null);
__decorate([
    computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TipStore.prototype, "finalBillAmount", null);
export const tipStore = new TipStore();
//# sourceMappingURL=TipStore.js.map