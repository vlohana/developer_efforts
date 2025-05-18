class TemplateExample extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
    <div>
        Inside templatee
    </div>
    `;
    const node = document.importNode(template.content,true)
    document.body.appendChild(node);
  }
}

customElements.define("template-example", TemplateExample);
