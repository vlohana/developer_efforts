
import { ProfileViewer as Component } from "./ProfileViewer";

export const TAG_NAME = "v-profile-viewer";

if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, Component);
}

declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: Component;
    }
}