import { LitElement, html } from "lit";
import { app_css } from "../css/app-css.css";


export class App extends LitElement {

    static readonly styles = [app_css]

    render() {
        return html`
        <div class="app">
            <app-logo>
                <h1 slot="app-heading">🏝️ Far Away 🧳</h1>
            </app-logo>
            <item-form>
                <span slot="item-list-text"> What do you need for your 😍 Trip!</span>
                <span slot="input-field-text"></item>
            </item-form>
            <items-list>
            </items-list>
            <app-footer>
                ... to-do
            </app-footer>
        </div>
        
        `
    }

}