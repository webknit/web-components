
import { MyButton } from './Button.js';

customElements.define('my-button', MyButton);

// let tmpl = document.querySelector('#x-cards');

// class MyTest2 extends HTMLElement {
//   constructor() {
//       super();
//       this.attachShadow({mode: 'open'});
//       this.shadowRoot.appendChild(tmpl.content.cloneNode(true));

//       console.log(this.shadowRoot.getAttribute("src"))
//     }
// }
    



// customElements.define('my-test2', MyTest2);

// const template = document.getElementById('cards');

// document.body.appendChild(
//   document.importNode(template.content, true)
// );