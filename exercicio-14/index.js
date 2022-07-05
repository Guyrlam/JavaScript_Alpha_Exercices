//Import elements
import createBrigadeiros from './modules/brigadeiros.js';
import createHome from './modules/home.js';
import createCupcakes from './modules/cupcakes.js';
import createDoces from './modules/doces.js';

//DOM elements
const content = document.querySelector('#app');
const header = document.querySelector('#header');

//NAVBAR
header.innerHTML = (`
    <header>
        <div id="logo">
            <figure><img id="logo-img" src="./assets/images/logo.webp" alt="logo image"></figure>
            <div>
                <img id="fit-img" src="./assets/images/fit.svg" alt="logo image">
                <h1>Açucar & Afeto</h1>
            </div>
        </div>
        <nav id="nav-bar">
            <ul>
                <li class="page">Home</li>
                <li class="page">Brigadeiro</li>
                <li class="page">Cupcake</li>
                <li class="page">Doces</li>  
            </ul>
        </nav>
    </header>
`);
const navItens = document.querySelectorAll('.page');

//change routes event
navItens.forEach((e,index)=> {
    e.addEventListener('click', ()=> {
        switch(index) {
            case 1:
                changeRoute('/brigadeiros')
            break;
            case 2:
                changeRoute('/cupcakes')
            break;
            case 3:
                changeRoute('/doces')
            break;
            default:
                changeRoute('/')
        }
    })
})

//change routes function
function changeRoute(route){
    let routeChangeEvent = new CustomEvent('onStateChange', {
        detail: {
            'param': route
        }
    });
    document.dispatchEvent(routeChangeEvent);
    return history.pushState({}, '', route);
}

//onStateChange listener
window.document.addEventListener('onStateChange', function(e) { 
    pageRender(e.detail.param);
});

//routes association
const routes = [
    {
        'route': '/',
        'function': createHome
    },
    {
        'route': '/brigadeiros',
        'function': createBrigadeiros
    },
    {
        'route': '/cupcakes',
        'function': createCupcakes
    },
    {
        'route': '/doces',
        'function': createDoces
    }
]

//page Render
function pageRender(param) {
    routes.forEach((el)=>{
        if(el.route === param){
            console.log(el.function)
            return el.function()
        }
    })

} 

//initial route
changeRoute('/')


export {content} 