//IMPORT ELEMENTS

//DOM ELEMENTS
const container = document.querySelector('#app')

//VARIABLES

//FUNCTIONS
function createConverter() {

    container.innerHTML = (`
        <div id="converter">
            <h1>Página em Desenvolvimento</h1>
            <p>Essa página estará disponível em breve! Por enquanto, continue explorando nossas outras funcionalidades!</p>
        </div>
        
    `)
}

//EXPORT ELEMENTS
export {createConverter}