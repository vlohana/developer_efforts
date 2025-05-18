import { LitElement, html } from "lit";
import { property, state } from "lit/decorators";


export class SelectOptionForRating extends LitElement {

    // @property({ type: Number, state: true })
    @state()
    percentage:Number = 0;

    render() {
        return html`
               <span>
                    <slot name="question"></slot>
                    <select 
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
        this.percentage = Number(optionValue.value);
        this.dispatchEvent(new CustomEvent('percentage-change', {
            detail: { optionValue: this.percentage },
            bubbles: true,
            composed: true
        }))
    }

}