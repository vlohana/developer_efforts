import { LitElement, html } from "lit";
export class FinalAmountDisplay extends LitElement {
    render() {
        return html `
            <div>
                <slot name="final"></slot>
            </div>
        `;
    }
}
//# sourceMappingURL=FinalAmountDisplay.js.map