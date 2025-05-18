import { action, computed, makeObservable, observable, reaction } from "mobx";

export type Item = {
    id: number,
    description: string,
    quantity: number,
    packed: boolean
}


class ItemStore {


    @observable
    private _items: Item[] = [];


    constructor() { makeObservable(this) }


    @action
    addItemsToList(item: Item) {
        this._items = [...this._items, item];
    }

    @computed
    get itemList() {
        console.log(`item list updated`)
        return this._items;
    }

    @action
    toggleItemState(itemId: number) {
        this._items.map(item => {
            if (item.id === itemId) {
                item.packed = !item.packed
            }

        });
    }

    @action
    removeItemFromList(id: number) {
        console.log("delete item with id:", id);
        this._items = this._items.filter(item => item.id !== id);
    }





}
export const itemStore = new ItemStore();