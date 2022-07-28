//IMPORT
import CharacterBehavior from "./script/CharacterBehavior.js";

//DOM elements
const app = document.querySelector('#app');
const hero = document.querySelector('#hero');
const scoreField = document.querySelector('#points')

//VARIABLES
const newCharacter = new CharacterBehavior(48,48);

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
})