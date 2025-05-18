import { Logo as Component } from "../Logo";
export const TAG_NAME = "app-logo";
if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, Component);
}
//# sourceMappingURL=app.js.map