import { LitElement, html } from "lit"
import { property, state } from "lit/decorators";
import { guard } from "lit/directives/guard"

export class BillAmountBox extends LitElement {

    // @property({ type: Number})
    @state()
    amountValue: Number = 0;

    @property({ type: Number })
    increment = 0;

    render() {
        return html`
        <span>
            <slot name="billAmount"></slot>
            <input type="text" 
            placeholder="Enter amount..." 
            .value=${this.amountValue}
            @input=${this.onBillAmountChange}
            // ${guard([this.amountValue], () => this.onBillAmountChange)}
            >
              <button @click=${this.incrementCounter}>Increment: ${this.increment}</button>
        </span>
       
        `
    }

    incrementCounter() {
        this.increment++;
        this.requestUpdate()
    }
    onBillAmountChange = (e: Event) => {
        const amount = e.target as HTMLInputElement;
        this.amountValue = Number(amount.value);
        this.dispatchEvent(new CustomEvent('amount-changed', {
            detail: { amount: this.amountValue },
            bubbles: true,
            composed: true
        }))
    }
}


