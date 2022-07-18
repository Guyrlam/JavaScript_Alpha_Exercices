//Import elements
import {content} from '../index.js';

//FUNCTIONS

//brigadeiros page creation
export default function createBrigadeiros() {
    content.innerHTML = (`
        <section id="default">
            <h1>Brigadeiros</h1>
            <p>Compre já o PDF com nossa essa que é uma de nossas receitas mais aclamadas pelo público!</p>
            <span>Valor: R$ 75,00</span>
            <button>Comprar</button>
        </section>
    `);

};
