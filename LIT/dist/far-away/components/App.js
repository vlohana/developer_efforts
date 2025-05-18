import { LitElement, html } from "lit";
import { app_css } from "../css/app-css.css";
class App extends LitElement {
    render() {
        return html `
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
        
        `;
    }
}
Object.defineProperty(App, "styles", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [app_css]
});
export { App };
//# sourceMappingURL=App.js.map