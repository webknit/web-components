import { html } from 'lit-html';
import './card.css';

import { Button } from './Button';

export const Card = ({title, theme, img}) => {
    
    const imgUrl = img || "https://images.unsplash.com/photo-1623009070764-45002990256e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";
  
    return html` 
    
    <div class=${['card', `card--${theme || ''}`].join(' ')}>

      <h1>${title}</h1>

      <img src=${imgUrl} />

      ${Button({ size: 'small', label: 'Button in here' })}

    </div>
    `;
};
