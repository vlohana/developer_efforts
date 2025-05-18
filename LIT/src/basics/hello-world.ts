import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators"


@customElement('hello-world')
export class HelloWorld extends LitElement {
    @property({ type: String,attribute:false })
    name = 'Vinod'


    render(){
       return html `
        <h1>Hello ${this.name}</h1>
        <p> you have an attribute set do check!</p>
       `
    }
    connectedCallback(): void {
        super.connectedCallback(); 
        console.log('connected callback')
    }
}