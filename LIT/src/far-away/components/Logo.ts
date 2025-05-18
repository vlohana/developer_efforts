import { html, LitElement } from "lit";
import { logo_page_css } from "../css/logo-page.css";


export class Logo extends LitElement {
    static readonly styles = [logo_page_css]

    renderHeading() {
        return html`
                <slot name="app-heading"/>
        `
    }

    render() {
        return html`
            <div>
            ${this.renderHeading()}
            </div>
        `
    }
}