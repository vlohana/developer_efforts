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
import { tipStore } from "./store/TipStore";
export class SelectOptionForRating extends LitElement {
    constructor() {
        super(...arguments);
        // @property({ type: Number, state: true })
        Object.defineProperty(this, "percentage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "isFirstOption", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "isSeconOption", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
    render() {
        return html `
               <span>
                    <slot name="question"></slot>
                    <select 
                        ?is-first=${this.isFirstOption}
                        ?is-second=${this.isSeconOption}
                        .value=${this.percentage}
                        @change=${this.handleSelectOption}
                    ">
                            <option value=${0}>Dissatified(0)%</option>
                            <option value=${5}>Ok Service (5)%</option>
                            <option value=${10}>Goog Service (10)%</option>
                            <option value=${20}>Amazing loved it! (20)%</option>
                    </select>
               </span>
        `;
    }
    handleSelectOption(e) {
        const optionValue = e.target;
        if (optionValue.getAttribute('is-first') !== null) {
            tipStore.updateRatingByFirstPerson(Number(optionValue.value));
        }
        else {
            tipStore.updateRatingBySecondPerson(Number(optionValue.value));
        }
        this.percentage = Number(optionValue.value);
    }
}
__decorate([
    state(),
    __metadata("design:type", Number)
], SelectOptionForRating.prototype, "percentage", void 0);
__decorate([
    property({ type: Boolean, attribute: "is-first" }),
    __metadata("design:type", Object)
], SelectOptionForRating.prototype, "isFirstOption", void 0);
__decorate([
    property({ type: Boolean, attribute: "is-second" }),
    __metadata("design:type", Object)
], SelectOptionForRating.prototype, "isSeconOption", void 0);
//# sourceMappingURL=SelectOptionForRating.js.map