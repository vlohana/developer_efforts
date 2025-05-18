import { MobxLitElement } from "@adobe/lit-mobx";
import { LitElement, html } from "lit"
import { property, state } from "lit/decorators";
import { guard } from "lit/directives/guard"
import { tipStore } from "./index"
import { action } from "mobx";
// import { action, makeObservable, observable } from "mobx";

export class BillAmountBox extends MobxLitElement {

    // @property({ type: Number})
    // @state()


    @property({ type: Number })
    amountValue = 0;



    @property({ type: Number })
    increment = 0;

    constructor() {
        super();
    }

    render() {
        return html`
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
       
        `
    }
    @action
    incrementCounter() {
        this.increment++;
        this.requestUpdate()
    }

    /**Using mobx */
    onBillInitialAmountChange = (e: Event) => {
        const amount = e.target as HTMLInputElement;
        tipStore.setBillAmount(Number(amount.value));
        this.amountValue = tipStore.actualBillAmount;
    }

    // @action
    onBillAmountChange = (e: Event) => {
        const amount = e.target as HTMLInputElement;
        this.amountValue = Number(amount.value);
        // this.dispatchEvent(new CustomEvent('amount-changed', {
        //     detail: { amount: this.amountValue },
        //     bubbles: true,
        //     composed: true
        // }))
    }
}


