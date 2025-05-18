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
export class FormStore {
    constructor() {
        Object.defineProperty(this, "_itemName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "_itemQuantity", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1
        });
        makeObservable(this);
    }
    setItemInputValue(item) {
        this._itemName = item;
    }
    setItemCount(itemCount) {
        this._itemQuantity = itemCount;
    }
    get itemCount() {
        console.log(`current item count: ${this._itemQuantity}`);
        return this._itemQuantity;
    }
    get itemValue() {
        return this._itemName;
    }
}
__decorate([
    observable,
    __metadata("design:type", String)
], FormStore.prototype, "_itemName", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], FormStore.prototype, "_itemQuantity", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormStore.prototype, "setItemInputValue", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FormStore.prototype, "setItemCount", null);
__decorate([
    computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], FormStore.prototype, "itemCount", null);
__decorate([
    computed,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], FormStore.prototype, "itemValue", null);
export const formStore = new FormStore();
//# sourceMappingURL=FormStore.js.map