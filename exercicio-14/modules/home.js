//Import elements
import {content} from '../index.js';

//FUNCTIONS

//home page creation
export default function createHome() {
    content.innerHTML = (`
        <!--presentation-->
        <section id="home">
            <div id="home-content">
            <h1>Descubra as Maravilhosas Receitas da Açucar e Afeto</h1>
            <p>Viaje pelo nosso site e descubra as receitas utilizadas em nosso estabelecimento.</p>
            </div>
        </section>
    `);

};

