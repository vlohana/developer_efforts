const template = document.createElement("template");
template.innerHTML = `
<style>
    h3 {color:green}
</style> 
<style>
    label {
    color:red;
    display:block;
    }
</style> 
<style>
    .description {
    font-size: .65 rem;
    font-weight: lighter;
    color:Green;
    }
</style> 

<label>
    <input type="checkbox"/>
    <slot></slot>
    <span class="description">
        <slot name="description">
        </slot>
    </span>
</label>
`;
class TodoItems extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    this.checkbox = shadow.querySelector("input");
    // this.innerHTML = `<style>h3 {color:green}</style> <h3  class="todo-items-lists">${this.innerText}</h3>`;
  }

  /**
   *  You specify which attributes to monitor.
   */
  static get observedAttributes() {
    return ["checked"];
  }

  connectedCallback(){
    console.log('connected');
  }

  disconnectedCallback(){
    console.log('disconnected');
  }

  /**
   * No, attributeChangedCallback is not a user-defined function.
   * It is a built-in lifecycle method in the Web Components API.
   * This method is automatically called when one of the
   * observed attributes of a custom element is added, removed, or changed.
   */
  attributeChangedCallback(name, oldVal, newVal) {
      if (name === "checked") this.updatedChecked(newVal);
      console.log(`name:${name}, oldVal:${oldVal}, newVal:${newVal}`);
  }

  updatedChecked(value) {
    this.checkbox.checked = value != null && value !== "false";
  }


}

customElements.define("todo-items", TodoItems);
const item = document.querySelector('todo-items');
let checked = true;

item.remove(); // this wil call webcomponent inbuild disconnected callback

// let myInterval = setInterval(()=> {
//     checked = !checked;
//     item.setAttribute('checked', checked);
// },500)

// clearInterval(myInterval)
