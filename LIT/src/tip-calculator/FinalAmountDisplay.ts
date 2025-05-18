import { LitElement, PropertyValues, html } from "lit"
import { property } from "lit/decorators";

export class FinalAmountDisplay extends LitElement {

    render() {
        return html`
            <div>
                <slot name="final"></slot>
            </div>
        `
    }
}