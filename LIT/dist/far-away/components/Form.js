var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MobxLitElement } from "@adobe/lit-mobx";
import { html } from "lit";
import { formStore } from "../store/FormStore";
import { itemStore } from "../store/ItemStore";
import { property } from "lit/decorators";
import { form_css } from "../css/form-page.css";
class Form extends MobxLitElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "quantity", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1
        });
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "handleItemCountChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (e) => {
                const itemCount = e.target;
                formStore.setItemCount(Number(itemCount.value));
                this.quantity = formStore.itemCount;
            }
        });
        Object.defineProperty(this, "onInputChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (e) => {
                const input = e.target;
                formStore.setItemInputValue(input.value);
                this.description = formStore.itemValue;
            }
        });
    }
    renderItemList() {
        return html `
            <span>
               <select 
               value="${this.quantity}"
               class="item-count-selector"
               @change=${this.handleItemCountChange}
               >
                ${Array.from({ length: 10 }, (_, i) => i + 1).map(n => html `
                    <option value="${n}">${n}</option>`)}
               </select>
            </span>

        `;
    }
    renderItemInputField() {
        return html `
            <span>
                <input name="input-item" value="${this.description}" placeholder="Enter item ..."
                @input=${this.onInputChange}
                ></input>
            </span>
        `;
    }
    render() {
        return html `
            <form class="form"
            @submit=${this.onFormSubmit}
            >
                <slot name="item-list-text" class="item-count"></slot>
                ${this.renderItemList()}
                <slot name="input-field-text"></slot>
                ${this.renderItemInputField()}
                <button>Add</button>
            </form>
            `;
    }
    onFormSubmit(event) {
        event.preventDefault(); //do not render by default on submit
        if (this.description === "")
            return;
        const newItem = {
            id: Date.now(),
            description: this.description,
            quantity: this.quantity,
            packed: false
        };
        console.log("added new item", newItem);
        itemStore.addItemsToList(newItem);
        console.log(itemStore.itemList);
    }
}
Object.defineProperty(Form, "styles", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [form_css]
});
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], Form.prototype, "quantity", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Form.prototype, "description", void 0);
export { Form };
//# sourceMappingURL=Form.js.map