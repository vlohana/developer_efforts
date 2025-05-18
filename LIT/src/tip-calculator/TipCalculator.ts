import { MobxLitElement } from "@adobe/lit-mobx";
import { LitElement, TemplateResult, html } from "lit"
import { property, state } from "lit/decorators";
import { when } from "lit/directives/when";
import { tipStore } from "./store/TipStore";

export class TipCalculator extends MobxLitElement {

    // @state()
    billValue = 0;

    // @property({ type: Number, })
    @state()
    percentage1 = 0;

    @property({ type: Number })
    percentage2 = 0;


    render() {
        const initialBillAmount = tipStore.actualBillAmount;
        this.percentage1 = tipStore.currentFirstRating;
        this.percentage2 = tipStore.currentSecondRating;

        return html`
            <div
               
            >
               <h3>TIP CALC-V </h3>
               <span slot="billAmount">Enter your bill amount</span> 
               <bill-amount></bill-amount>
               <div slot="question">
                    <span>How will you rate us today !</span>
                    <select-rating id="my-rating" is-first></select-rating>
               </div>
                <div slot="question">
                    <span>How much your friend rate us today!</span>
                    <select-rating id="friend-rating" is-second></select-rating>
               </div>
                 ${when(
            initialBillAmount > 0,
            () =>
                html` <final-amount>
                        <div slot="final">
                            <h3>Final bill amount:</h3>
                            <p>Actual bill: ${initialBillAmount} </p>
                            <p>Your rating:${tipStore.currentFirstRating} </p>
                            <p>Your friend rating: ${tipStore.currentSecondRating}</p>
                            ${this.renderCalculatedAmount()}
                        </div>
                    </final-amount>`
        )}
            </div>
            `
    }


    onRatingChange = (e: CustomEvent) => {

        console.log(`percentage 1 tip store:`)

        console.log(`Got percentage change2: ${e.detail.optionValue} `)
        const selEvent = e.target as HTMLElement
        if (selEvent.id === "my-rating") {
            console.log(`Got my rating as: ${e.detail.optionValue} `);
            this.percentage1 = e.detail.optionValue;
        } else if (selEvent.id = "friend-rating") {
            console.log(`Got my rating as: ${e.detail.optionValue} `);
            this.percentage2 = e.detail.optionValue;
        }
        this.requestUpdate()

    }

    renderCalculatedAmount(): TemplateResult {
        // console.log("current 1: ", this.percentage1);
        // console.log("current 2: ", this.percentage2);
        // console.log("current bill amount:", tipStore.actualBillAmount)
        return html`
                    <span>
                             Total Amount to Pay:
                     </span>
                     ${tipStore.finalBillAmount}
                `
    }

}