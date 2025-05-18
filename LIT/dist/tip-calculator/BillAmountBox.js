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
import { property } from "lit/decorators";
import { guard } from "lit/directives/guard";
import { tipStore } from "./index";
import { action } from "mobx";
// import { action, makeObservable, observable } from "mobx";
export class BillAmountBox extends MobxLitElement {
    constructor() {
        super();
        // @property({ type: Number})
        // @state()
        Object.defineProperty(this, "amountValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "increment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /**Using mobx */
        Object.defineProperty(this, "onBillInitialAmountChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (e) => {
                const amount = e.target;
                tipStore.setBillAmount(Number(amount.value));
                this.amountValue = tipStore.actualBillAmount;
            }
        });
        // @action
        Object.defineProperty(this, "onBillAmountChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (e) => {
                const amount = e.target;
                this.amountValue = Number(amount.value);
                // this.dispatchEvent(new CustomEvent('amount-changed', {
                //     detail: { amount: this.amountValue },
                //     bubbles: true,
                //     composed: true
                // }))
            }
        });
    }
    render() {
        return html `
        <span>
            <slot name="billAmount"></slot>
            <input type="text" 
            placeholder="Enter amount..." 
            .value=${this.amountValue}
            @input=${this.onBillInitialAmountChange}
            // ${guard([this.amountValue], () => this.onBillAmountChange)}
            >
              <button @click=${this.incrementCounter}>Increment: ${this.increment}</button>
        </span>
       
        `;
    }
    incrementCounter() {
        this.increment++;
        this.requestUpdate();
    }
}
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], BillAmountBox.prototype, "amountValue", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], BillAmountBox.prototype, "increment", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BillAmountBox.prototype, "incrementCounter", null);
//# sourceMappingURL=BillAmountBox.js.map