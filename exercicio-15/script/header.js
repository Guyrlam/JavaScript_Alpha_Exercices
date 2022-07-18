//DOM ELEMENTS
const header = document.querySelector('#header')


//FUNCTIONS
function createHeader() {
    header.innerHTML = (`
        <figure id="logo">
            <img src="./assets/images/logo.svg" alt="logo da página" />
            <figcaption>Smart Finance</figcaption>
        </figure>

        <nav id="navbar">
            <ul>
                <li class="nav-item">HOME</li>
                <li class="nav-item">COTAÇÃO</li>
                <li class="nav-item">CONVERSÃO</li>
            </ul>
        </nav>
    `)
}

//EXPORT ELEMENTS
export {createHeader};