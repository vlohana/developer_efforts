import { App as Component } from "../components/App"

export const TAG_NAME = "my-app";

if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, Component);
}
declare global {
    interface HTMLElemenTagNameMap {
        [TAG_NAME]: Component
    }
}