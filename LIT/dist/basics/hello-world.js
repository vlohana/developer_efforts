var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";
let HelloWorld = class HelloWorld extends LitElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Vinod'
        });
    }
    render() {
        return html `
        <h1>Hello ${this.name}</h1>
        <p> you have an attribute set do check!</p>
       `;
    }
    connectedCallback() {
        super.connectedCallback();
        console.log('connected callback');
    }
};
__decorate([
    property({ type: String, attribute: false }),
    __metadata("design:type", Object)
], HelloWorld.prototype, "name", void 0);
HelloWorld = __decorate([
    customElement('hello-world')
], HelloWorld);
export { HelloWorld };
//# sourceMappingURL=hello-world.js.map