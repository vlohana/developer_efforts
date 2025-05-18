import { html, css, LitElement } from "lit";
import {classMap} from "lit/directives/class-map.js"
import { customElement, property, state } from "lit/decorators.js";

@customElement('word-viewer')
class WordViewer extends LitElement {
    static styles=css `
        :host {
        color:violet;
        cursor:pointer;
        padding: 2em;
        display: block;
        }
        pre{
          background-color:white;
          padding:0.2em
        }
        .backwards {
          background-color:violet;
        color:white;
          padding:0.2em
        }
        
        `;

    @property()
    words: string = '';

    @state() private idx = 0;
    
    @state() private playDirection = 1;
    
    private _intervalTimer?:number;
    
    connectedCallback(){
      super.connectedCallback()
      this._intervalTimer = setInterval(this.incrementIdx,1000)
      
    }
  
  
    disconnectedCallback(){
      super.disconnectedCallback();
      console.log('disconected callback');
      clearInterval(this._intervalTimer);
    }

    constructor() {
        super();
    }
    
    
    render() {
      console.log('current idx value',this.idx);
       console.log('playdirection value',this.playDirection);
        const splitWords = this.words.split(" ")
//         console.log(splitWords[(this.idx % splitWords.length)])
            console.log(splitWords[((this.idx % splitWords.length)+ splitWords.length)%splitWords.length])
        return html`
            <!-- <pre>${splitWords[(this.idx % splitWords.length)]}</pre> -->
           
            <pre
              @click=${this.swithcPlayDirection}
              class=${classMap({backwards: this.playDirection === -1})}
              >
              ${splitWords[((this.idx % splitWords.length)+ splitWords.length)%splitWords.length]}
            </pre>
       
       `;
    }
//     incrementIdx = () => this.idx += 1;
    incrementIdx = ()=> this.idx += this.playDirection;
    swithcPlayDirection = ()=> this.playDirection *= -1;

}