
import { SelectOptionForRating as Component } from "../SelectOptionForRating"

const TAG_NAME = "select-rating";

if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, Component)
}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: Component
    }
}