import { html, css, LitElement } from "lit";

export class TodoList extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static properties = {
    checked: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    return html`<label>
      <input type="checkbox" ${this.checked} />
    </label> `;
  }
}
customElements.define("todo-list", TodoList);
