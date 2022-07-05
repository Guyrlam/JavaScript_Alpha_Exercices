//Import elements
import {content} from '../index.js';

//FUNCTIONS

//cupcakes page creation
export default function createCupcakes() {
    content.innerHTML = (`
        <section id="default">
            <h1>Cupcakes</h1>
            <p>Compre já o PDF com nossa essa que é uma de nossas receitas mais aclamadas pelo público!</p>
            <span>Valor: R$ 97,00</span>
            <button>Comprar</button>
        </section>
    `);

};
