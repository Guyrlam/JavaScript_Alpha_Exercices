//Import elements
import {content} from '../index.js';

//FUNCTIONS

//doces page creation
export default function createDoces() {
    content.innerHTML = (`
        <section id="default">
            <h1>Doces</h1>
            <p>Compre já o PDF com numa coletânea das nossas receitas mais aclamadas pelo público!</p>
            <span>Valor: R$ 300,00</span>
            <button>Comprar</button>
        </section>
    `);

};
