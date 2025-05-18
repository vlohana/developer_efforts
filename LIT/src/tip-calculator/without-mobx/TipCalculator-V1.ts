import { LitElement, TemplateResult, html } from "lit"
import { property, state } from "lit/decorators";

export class TipCalculator extends LitElement {

    // @property({ type: Number })
    @state()
    billValue = 0;

    // @property({ type: Number, })
    @state()
    percentage1 = 0;

    @property({ type: Number })
    percentage2 = 0;


    render() {
        return html`
            <div
                @amount-changed=${this.onAmountChange}
                @percentage-change=${this.onRatingChange}
            >
               <h3>TIP CALC-V </h3>
               <span slot="billAmount">Enter your bill amount</span> 
               <bill-amount></bill-amount>
               <div slot="question">
                    <span>How will you rate us today !</span>
                    <select-rating id="my-rating"></select-rating>
               </div>
                <div slot="question">
                    <span>How much your friend rate us today!</span>
                    <select-rating id="friend-rating"></select-rating>
               </div>
                ${this.billValue > 0 ?
                html` <final-amount>
                    <div slot="final">
                        <h3>Final bill amount:</h3>
                        <p>Actual bill: ${this.billValue} </p>
                        <p>Your rating:${this.percentage1} </p>
                        <p>Your friend rating: ${this.percentage2}</p>
                        ${this.renderCalculatedAmount()}
                    </div>
               </final-amount>`
                : ""
            }
              
            </div>
        `
    }


    onAmountChange = (e: CustomEvent) => {
        console.log(`got amount change: ${e.detail.amount}`)
        this.billValue = e.detail.amount;
        this.requestUpdate();//re-render the updated value post value is change
    }



    onRatingChange = (e: CustomEvent) => {
        console.log(`Got percentage change2: ${e.detail.optionValue}`)
        const selEvent = e.target as HTMLElement
        if (selEvent.id === "my-rating") {
            console.log(`Got my rating as: ${e.detail.optionValue}`);
            this.percentage1 = e.detail.optionValue;
        } else if (selEvent.id = "friend-rating") {
            console.log(`Got my rating as: ${e.detail.optionValue}`);
            this.percentage2 = e.detail.optionValue;
        }
        this.requestUpdate()

    }

    renderCalculatedAmount(): TemplateResult {
        return html`
        <span>
            Total Amount to Pay: 
        </span>
        ${this.billValue + (this.billValue) * ((this.percentage1 + this.percentage2) / 2) / 100}
        `
    }

}