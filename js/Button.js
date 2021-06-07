const button = document.createElement('template');

button.innerHTML = `
    <button id="click-me">Log click event</button>
`
export class MyButton extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(button.content.cloneNode(true));

      this.shadowRoot.getElementById('click-me').addEventListener('click', event => console.log(event));

      if(this.hasAttribute('classes')) {
        
        this.shadowRoot.getElementById('click-me').className += this.getAttribute('classes');
      } 
    }
}