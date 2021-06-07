import { MyButton } from './Button.js';

const cards = document.createElement('template');

const arr = [1,2,3,4,5,6];

cards.innerHTML = `
    <div>
    <h2>My cards</h2>
    <my-button></my-button>
    <my-button></my-button>
    <my-button></my-button>
    </div>
`
export class MyCards extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(cards.content.cloneNode(true));
    }
}