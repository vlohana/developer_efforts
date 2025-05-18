import { FinalAmountDisplay as Component } from "../FinalAmountDisplay";



const TAG_NAME = "final-amount";

if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, Component)
}
declare global {
    interface HTMLELementTagNameMap {
        [TAG_NAME]: Component
    }

}