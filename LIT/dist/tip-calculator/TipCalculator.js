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
import { property, state } from "lit/decorators";
import { when } from "lit/directives/when";
import { tipStore } from "./store/TipStore";
export class TipCalculator extends MobxLitElement {
    constructor() {
        super(...arguments);
        // @state()
        Object.defineProperty(this, "billValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        // @property({ type: Number, })
        Object.defineProperty(this, "percentage1", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "percentage2", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "onRatingChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (e) => {
                console.log(`percentage 1 tip store:`);
                console.log(`Got percentage change2: ${e.detail.optionValue} `);
                const selEvent = e.target;
                if (selEvent.id === "my-rating") {
                    console.log(`Got my rating as: ${e.detail.optionValue} `);
                    this.percentage1 = e.detail.optionValue;
                }
                else if (selEvent.id = "friend-rating") {
                    console.log(`Got my rating as: ${e.detail.optionValue} `);
                    this.percentage2 = e.detail.optionValue;
                }
                this.requestUpdate();
            }
        });
    }
    render() {
        const initialBillAmount = tipStore.actualBillAmount;
        this.percentage1 = tipStore.currentFirstRating;
        this.percentage2 = tipStore.currentSecondRating;
        return html `
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
                 ${when(initialBillAmount > 0, () => html ` <final-amount>
                        <div slot="final">
                            <h3>Final bill amount:</h3>
                            <p>Actual bill: ${initialBillAmount} </p>
                            <p>Your rating:${tipStore.currentFirstRating} </p>
                            <p>Your friend rating: ${tipStore.currentSecondRating}</p>
                            ${this.renderCalculatedAmount()}
                        </div>
                    </final-amount>`)}
            </div>
            `;
    }
    renderCalculatedAmount() {
        // console.log("current 1: ", this.percentage1);
        // console.log("current 2: ", this.percentage2);
        // console.log("current bill amount:", tipStore.actualBillAmount)
        return html `
                    <span>
                             Total Amount to Pay:
                     </span>
                     ${tipStore.finalBillAmount}
                `;
    }
}
__decorate([
    state(),
    __metadata("design:type", Object)
], TipCalculator.prototype, "percentage1", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], TipCalculator.prototype, "percentage2", void 0);
//# sourceMappingURL=TipCalculator.js.map