class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div>
    <span name=>
    <p>${this.innerText} ${this.getAttribute("name")}</p>
    </span>
    </div>    
    
    `;
  }
}

customElements.define("hello-world", HelloWorld);
