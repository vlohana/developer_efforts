import { MobxLitElement } from "@adobe/lit-mobx";
import { itemStore } from "../store/ItemStore";
import { html } from "lit";
import { packing_css } from "../css/packing-items.css";
import { map } from "lit/directives/map";
class PackingList extends MobxLitElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "onRemoveItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (id) => {
                itemStore.removeItemFromList(id);
            }
        });
    }
    renderAddedItems() {
    }
    render() {
        return html `
            <div class="list">
                <ul>
                    ${map(itemStore.itemList, (item) => html `
                        <li> 
                            <input type="checkbox" 
                            ?checked=${item.packed}
                            @click=${() => this.toggleCheckBox(item.id)}
                            />
                            <span class="item-list-description" style=${item.packed ? "text-decoration:line-through" : ""}>${item.quantity} ${item.description}</span>
                            <button 
                            @click=${() => this.onRemoveItem(item.id)}
                            >❌</button>
                        </li>`)}
                </ul>        
            </div>
        `;
    }
    toggleCheckBox(id) {
        itemStore.toggleItemState(id);
    }
}
Object.defineProperty(PackingList, "styles", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [packing_css]
});
export { PackingList };
//// <button>&times;</button>
//# sourceMappingURL=PackingList.js.map