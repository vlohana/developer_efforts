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
class ItemStore {
    constructor() {
        Object.defineProperty(this, "_items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        makeObservable(this);
    }
    addItemsToList(item) {
        this._items = [...this._items, item];
    }
    get itemList() {
        console.log(`item list updated`);
        return this._items;
    }
    toggleItemState(itemId) {
        this._items.map(item => {
            if (item.id === itemId) {
                item.packed = !item.packed;
            }
        });
    }
    removeItemFromList(id) {
        console.log("delete item with id:", id);
        this._items = this._items.filter(item => item.id !== id);
    }
}
__decorate([
    observable,
    __metadata("design:type", Array)
], ItemStore.prototype, "_items", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ItemStore.prototype, "addItemsToList", null);
__decorate([
    computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ItemStore.prototype, "itemList", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ItemStore.prototype, "toggleItemState", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ItemStore.prototype, "removeItemFromList", null);
export const itemStore = new ItemStore();
//# sourceMappingURL=ItemStore.js.map