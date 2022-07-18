//IMPORT ELEMENTS
import {createHeader} from './script/header.js';
import {createHome} from './script/home.js';
import {createConverter} from './script/convercao.js';
import {createQuoter,} from './script/cotacao.js';

//initial condition
createHeader()

//DOM ELEMENTS
const navItens = document.querySelectorAll('.nav-item')

//VARIABLES
const routes = [
    {
        'route': '/',
        'function': createHome
    },
    {
        'route': '/cotacao-monetaria',
        'function': createQuoter
    },
    {
        'route': '/covercao-monetaria',
        'function': createConverter
    } 
];


//LISTENERS

navItens.forEach((el,index) => {
    el.addEventListener('click', ()=>{
        switch(index){
            case 1:
                changeRoute('/cotacao-monetaria');
            break;
            case 2:
                changeRoute('/covercao-monetaria');
            break;
            default:
                changeRoute('/');
        };
    });
});

window.document.addEventListener('onStateChange', function(e) { 
    pageRender(e.detail.param);
});


//FUNCTIONS
function changeRoute(route){
    let routChangeEvent = new CustomEvent ('onStateChange', {
        detail: {
            'param': route
        }
    })
    document.dispatchEvent(routChangeEvent);
    return history.pushState({},'',route);
}

function pageRender(route) {
    routes.forEach((el)=>{
        if(el.route === route){
            return el.function()
        }
    })
}

//initial page
changeRoute('/')


//EXPORT ELEMENTS
export {changeRoute}

