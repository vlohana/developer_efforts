import { html, LitElement } from "lit";
import { logo_page_css } from "../css/logo-page.css";
class Logo extends LitElement {
    renderHeading() {
        return html `
                <slot name="app-heading"/>
        `;
    }
    render() {
        return html `
            <div>
            ${this.renderHeading()}
            </div>
        `;
    }
}
Object.defineProperty(Logo, "styles", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [logo_page_css]
});
export { Logo };
//# sourceMappingURL=Logo.js.map