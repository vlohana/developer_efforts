const template = document.createElement("template");
template.innerHTML = `
<div>
    <button id="decrement">-</button>
    <span id="count">0</span>
    <button id="increment">+</button>
</div>
`;

class CountElemLifeCycle extends HTMLElement {
  countElem;
  decrementButton;
  incrementButton;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    this.countElem = shadow.querySelector("#count");
    this.decrementButton = shadow.querySelector("#decrement");
    this.incrementButton = shadow.querySelector("#increment");
  }

  get steps() {
    console.log("steps: ", this.getAttribute("steps"));
    return this.getAttribute("steps");
  }

  set steps(value) {
    if (value) {
      this.setAttribute("steps", value);
    } else {
      this.removeAttribute("steps");
    }
  }

  get initialValue() {
    return this.getAttribute("initialValue");
  }

  set initialValue(value) {
    if (value) {
      this.setAttribute("initialValue", value);
    } else {
      this.removeAttribute("initialValue");
    }
  }

  connectedCallback() {
    console.log("connected callback");
    this.count = this.initialValue || 0;
    this.countElem.innerText = this.count;
    console.log("count: ", this.count);
    this.decrementButton.addEventListener(
      "click",
      this.decrementCountByStep.bind(this)
    );
    this.incrementButton.addEventListener(
      "click",
      this.incrementCountByStep.bind(this)
    );
  }

  diconnectCallback() {
    this.decrementButton.removeEventListener(
      "click",
      this.decrementCountByStep.bind(this)
    );
    this.incrementButton.removeEventListener(
      "click",
      this.incrementCountByStep.bind(this)
    );
  }

  decrementCountByStep() {
    this.count = Number(this.count) - Number(this.steps);
    if (Number(this.count) > 0) {
      this.countElem.innerText = this.count;
    } else {
      this.count = this.initialValue;
      this.countElem.innerText = this.count;
    }
  }

  incrementCountByStep() {
    this.count = Number(this.count) + Number(this.steps);
    this.countElem.innerText = this.count;
  }

  static get observedAttributes() {
    return ["steps", "initialvalue"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(`name:${name}, oldVal:${oldVal}, newVal:${newVal}`);
  }
}
customElements.define("count-element-life-cycle", CountElemLifeCycle);
