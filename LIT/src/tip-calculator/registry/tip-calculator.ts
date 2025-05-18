

import { TipCalculator as Component } from "../TipCalculator";

const TAG_NAME = "tip-calculator";

if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, Component);
}

declare global {

    interface HTMLElementTagNameMap {
        [TAG_NAME]: Component;
    }

}



