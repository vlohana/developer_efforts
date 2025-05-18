import { html, css, LitElement } from "lit";

const template = customElement

class ModalElement extends LitElement {
  constructor() {}

  render() {
    return html`
      <div class="modal-box">
        <div class="modal-header"></div>
        <div class="modal-content"></div>
        <div class="modal-footer"></div>
      </div>
    `;
  }
}
customElements.define("modal-element", ModalElement);
