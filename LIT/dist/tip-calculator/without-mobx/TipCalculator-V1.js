var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html } from "lit";
import { property, state } from "lit/decorators";
export class TipCalculator extends LitElement {
    constructor() {
        super(...arguments);
        // @property({ type: Number })
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
        Object.defineProperty(this, "onAmountChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (e) => {
                console.log(`got amount change: ${e.detail.amount}`);
                this.billValue = e.detail.amount;
                this.requestUpdate(); //re-render the updated value post value is change
            }
        });
        Object.defineProperty(this, "onRatingChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (e) => {
                console.log(`Got percentage change2: ${e.detail.optionValue}`);
                const selEvent = e.target;
                if (selEvent.id === "my-rating") {
                    console.log(`Got my rating as: ${e.detail.optionValue}`);
                    this.percentage1 = e.detail.optionValue;
                }
                else if (selEvent.id = "friend-rating") {
                    console.log(`Got my rating as: ${e.detail.optionValue}`);
                    this.percentage2 = e.detail.optionValue;
                }
                this.requestUpdate();
            }
        });
    }
    render() {
        return html `
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
            html ` <final-amount>
                    <div slot="final">
                        <h3>Final bill amount:</h3>
                        <p>Actual bill: ${this.billValue} </p>
                        <p>Your rating:${this.percentage1} </p>
                        <p>Your friend rating: ${this.percentage2}</p>
                        ${this.renderCalculatedAmount()}
                    </div>
               </final-amount>`
            : ""}
              
            </div>
        `;
    }
    renderCalculatedAmount() {
        return html `
        <span>
            Total Amount to Pay: 
        </span>
        ${this.billValue + (this.billValue) * ((this.percentage1 + this.percentage2) / 2) / 100}
        `;
    }
}
__decorate([
    state(),
    __metadata("design:type", Object)
], TipCalculator.prototype, "billValue", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], TipCalculator.prototype, "percentage1", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], TipCalculator.prototype, "percentage2", void 0);
//# sourceMappingURL=TipCalculator-V1.js.map