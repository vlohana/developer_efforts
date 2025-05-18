import { MobxLitElement } from "@adobe/lit-mobx";
import { itemStore } from "../store/ItemStore";
import { CSSResultGroup, html } from "lit";
import { packing_css } from "../css/packing-items.css";
import { map } from "lit/directives/map";
import { state } from "lit/decorators";


export class PackingList extends MobxLitElement {
    static readonly styles = [packing_css]


    renderAddedItems() {

    }

    render() {
        return html`
            <div class="list">
                <ul>
                    ${map(itemStore.itemList, (item) =>
                    html`
                        <li> 
                            <input type="checkbox" 
                            ?checked=${item.packed}
                            @click=${()=>this.toggleCheckBox(item.id)}
                            />
                            <span class="item-list-description" style=${item.packed ? "text-decoration:line-through" : ""}>${item.quantity} ${item.description}</span>
                            <button 
                            @click=${()=>this.onRemoveItem(item.id)}
                            >❌</button>
                        </li>`)}
                </ul>        
            </div>
        `
    }
    toggleCheckBox(id: number) {
        itemStore.toggleItemState(id);
    }
    onRemoveItem= (id:number)=>{
        itemStore.removeItemFromList(id);
    }


}
//// <button>&times;</button>