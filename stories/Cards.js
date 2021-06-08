import { html } from 'lit-html';
import './cards.css';

import { Card } from './Card';



export const Cards = ({title, bgColor}) => {
  
    return html` 

    <div style="background-color: ${bgColor}">
        <h2>${title}</h2>

        <div class="cards">
            ${Card({title:"the title", label:"Button in here"})}
            ${Card({title:"the title", label:"Button in here"})}
            ${Card({title:"the title", label:"Button in here"})}

        </div>
    </div>
    
    `;
};
