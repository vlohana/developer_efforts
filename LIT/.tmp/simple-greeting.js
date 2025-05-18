import { html, css, LitElement } from "lit";

export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static properties = {
    name: { type: String, reflect: true },
    word: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    return html`<div>Hello${this.word}</div>`;
  }
}
customElements.define("simple-greeting", SimpleGreeting);
