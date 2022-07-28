//IMPORT
import CharacterBehavior from "./script/CharacterBehavior.js";
import ItensBehavior from "./script/ItensBehavior.js";
import {random, trackMoviment} from './script/useful.js'

//DOM elements
const app = document.querySelector('#app');
const hero = document.querySelector('#hero');
const scoreField = document.querySelector('#points')

//VARIABLES
let heroObj = undefined
let itemObj = {}

const newCharacter = new CharacterBehavior(48,48);

let game = false;

//LISTENERS
window.onload = ()=>{
    setInterval(trackMoviment(),200)
    const newItem = new ItensBehavior('coin',random(10,40),-5)
    newItem.creation
    newItem.move
}

window.addEventListener('keydown',(event)=>{
    switch(event.key){
        case 'ArrowUp':
            newCharacter.foward
        break;
        case 'ArrowDown':
            newCharacter.back
        break;
        case 'ArrowRight':
            newCharacter.right
        break;
        case 'ArrowLeft':
            newCharacter.left
        break;
    }
    const position = hero.getBoundingClientRect()

    const positionEvent = new CustomEvent ('position', {
        'detail':{ 'type': 'hero', 'object': {
            'p1': {
                'y': position.top,
                'x': position.left 
            },
            'p2': {
                'y': position.top,
                'x': (position.left + position.width) 
            },
            'p3': {
                'y': (position.top + position.height),
                'x': position.left 
            },
            'p4': {
                'y': (position.top + position.height),
                'x': (position.left + position.width) 
            }
        } 
    }})

    document.dispatchEvent(positionEvent);
})

document.addEventListener('restart', function(e){
    const newItem = new ItensBehavior(e.detail.name,random(10,40),e.detail.top)
    newItem.creation
    newItem.move
});

document.addEventListener('position', function(e){
    if(e.detail.type === 'hero'){
        heroObj = e.detail.object
        
    }
    if(e.detail.type === 'item'){
        itemObj = e.detail.object 
    }

    if(heroObj != undefined){
        setTimeout(()=>{
            if( (itemObj.p1.x <= heroObj.p4.x && itemObj.p1.y <= heroObj.p4.y) &&
            (itemObj.p2.x >= heroObj.p3.x && itemObj.p2.y <= heroObj.p3.y) &&
            (itemObj.p3.x <= heroObj.p2.x && itemObj.p3.y >= heroObj.p2.y) &&
            (itemObj.p4.x >= heroObj.p1.x && itemObj.p4.y >= heroObj.p1.y)
            ){

            newCharacter.score
            game = true
        }
        },1)}
    
    
});

//FUNCTION
function gameValue(x){
    game = x
}

export {game, gameValue}