import { LitElement, html } from "lit";
import { property, state } from "lit/decorators";
import { tipStore } from "./store/TipStore";


export class SelectOptionForRating extends LitElement {

    // @property({ type: Number, state: true })
    @state()
    percentage: Number = 0;

    @property({ type: Boolean, attribute: "is-first" })
    isFirstOption = false

    @property({ type: Boolean, attribute: "is-second" })
    isSeconOption = false

    render() {
        return html`
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
        `
    }
    handleSelectOption(e: Event) {
        const optionValue = e.target as HTMLSelectElement
        if (optionValue.getAttribute('is-first') !== null) {
            tipStore.updateRatingByFirstPerson(Number(optionValue.value))
        } else {
            tipStore.updateRatingBySecondPerson(Number(optionValue.value))
        }
        this.percentage = Number(optionValue.value);


    }

}