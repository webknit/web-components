let tmpl = document.querySelector('#x-card');

export class MyCard extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
}