import { action, computed, makeObservable, observable } from "mobx";


export class FormStore {

    @observable
    private _itemName: string = "";

    @observable
    private _itemQuantity = 1;

    constructor() {
        makeObservable(this);
    }

    @action
    setItemInputValue(item: string) {
        this._itemName = item;
    }
    @action
    setItemCount(itemCount: number) {
        this._itemQuantity = itemCount;
    }


    @computed
    get itemCount(): number {
        console.log(`current item count: ${this._itemQuantity}`);
        return this._itemQuantity;
    }

    @computed
    get itemValue(): string {
        return this._itemName;
    }

}

export const formStore = new FormStore();
