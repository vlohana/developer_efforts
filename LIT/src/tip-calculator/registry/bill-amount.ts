import { BillAmountBox as Component } from "../BillAmountBox";

const TAG_NAME = "bill-amount";

if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, Component);
}

declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: Component
    }
}