import { MobxLitElement } from "@adobe/lit-mobx";
import { CSSResultGroup, html } from "lit";
import { formStore } from "../store/FormStore";
import { Item, itemStore } from "../store/ItemStore";
import { property } from "lit/decorators";
import { form_css } from "../css/form-page.css";


export class Form extends MobxLitElement {

    static readonly styles=[form_css];

    @property({ type: Number })
    quantity = 1;

    @property({ type: String })
    description = "";


    renderItemList() {
        return html`
            <span>
               <select 
               value="${this.quantity}"
               class="item-count-selector"
               @change=${this.handleItemCountChange}
               >
                ${Array.from({ length: 10 }, (_, i) => i + 1).map(n =>
                html`
                    <option value="${n}">${n}</option>`
                )}
               </select>
            </span>

        `
    }

    renderItemInputField() {
        return html`
            <span>
                <input name="input-item" value="${this.description}" placeholder="Enter item ..."
                @input=${this.onInputChange}
                ></input>
            </span>
        `
    }

    render() {
        return html`
            <form class="form"
            @submit=${this.onFormSubmit}
            >
                <slot name="item-list-text" class="item-count"></slot>
                ${this.renderItemList()}
                <slot name="input-field-text"></slot>
                ${this.renderItemInputField()}
                <button>Add</button>
            </form>
            `
    }

    handleItemCountChange = (e: Event) => {
        const itemCount = e.target as HTMLSelectElement;
        formStore.setItemCount(Number(itemCount.value));
        this.quantity = formStore.itemCount;
    }
    onInputChange = (e: Event) => {
        const input = e.target as HTMLInputElement;
        formStore.setItemInputValue(input.value);
        this.description = formStore.itemValue;
    }
    onFormSubmit(event: Event) {
        event.preventDefault();//do not render by default on submit
        if(this.description === "")return;
        const newItem:Item = {
            id: Date.now(),
            description: this.description,
            quantity: this.quantity,
            packed:false
        }
        console.log("added new item", newItem);
        itemStore.addItemsToList(newItem)
        console.log(itemStore.itemList)
    }
      

}