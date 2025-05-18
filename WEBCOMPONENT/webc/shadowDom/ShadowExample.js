const template = document.createElement("template");
template.innerHTML = `
<style>
    label {
    color:red;
    display:block;
    }
</style> 
<style>
    .description {
      font-size: .65rem;
      font-weight:lighter;
      color:green
    }
</style> 
<style>
    button {
        color:Green
    }
</style>

<div>
<label>
    <input type="checkbox"/>
    <slot></slot>
    <span class="description">
        <slot name="description">
        </slot>
    </span>
</label>
</div>

<style>
  slot: {
    color: red;
  }

  ::slotted(h1){
  color:blue;
  }

  ::slotted([slot="footer"]){
    color:green;
  }

  main::slotted(*){
  color:orange}
  
</style>

 <h1><slot name="header"> Fallback header content</h1>
  <main><slot > Fallback main content</main>
  <footer><slot name="footer"> Fallback footer content</footer>
`;

class ShadowDomExample extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("todo-list-example", ShadowDomExample);
