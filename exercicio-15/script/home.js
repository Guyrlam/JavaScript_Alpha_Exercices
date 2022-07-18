//IMPORT ELEMENTS

//DOM ELEMENTS
const container = document.querySelector('#app')

//VARIABLES

//FUNCTIONS
function createHome() {
    container.innerHTML = (`
        <!--home-->
        <main id="home">

            <!--presentation-->
            <section id="text-home">
                <h1>Serviço Personalizado para Profissionais do Mercado Financeiro</h1>
                <p>Utilize nosso sitema para realizar conversões e cotações de mais de 150 moedas! Em breve teremos também a visualização gráfica dessas operações, continue evoluindo conosco! </p>
            </section>

        </main>
    `)
}

//EXPORT ELEMENTS
export {createHome}