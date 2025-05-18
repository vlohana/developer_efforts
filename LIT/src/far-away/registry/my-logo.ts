import { Logo as Component } from "../components/Logo"

 const TAG_NAME = "app-logo";

if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, Component);
}
declare global {
    interface HTMLElemenTagNameMap {
        [TAG_NAME]: Component
    }
}