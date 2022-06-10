//DOM elements
//buttons
const startButton = document.querySelector('#start');
const restartButton = document.querySelector('#restart');
const bomb = document.querySelector('#win');
//display
const initDisplay = document.querySelector('#start');
const gameDisplay = document.querySelector('#game');
//audio
const explosion = document.querySelector('#audio-lose');
const victory = document.querySelector('#audio-win');

//Variables and constants
let timer;

//listeners
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

//functions
function startGame() {
    //aplicationtext
    document.querySelector('#game h1').textContent = ('Desarme a bomba');
    document.querySelector('#game h1').style.color = "#071D41";

    //objective
    bomb.addEventListener('click', win)
    
    //restart button
    restartButton.style.display = 'none';

    //bomb image
    bomb.setAttribute('src','./assets/images/bomb.gif');

    //visible display
    initDisplay.style.display = 'none';
    gameDisplay.style.display = 'flex';

    //timer
    timer = setTimeout(lose, 10000);

}

function lose () {
    //play audio
    explosion.play();

    //bomb image
    bomb.setAttribute('src','./assets/images/bomb-explode.png');

    //lose text
    document.querySelector('#game h1').textContent = ('Não foi dessa vez...');
    document.querySelector('#game h1').style.color = "red";
    
    //restart button
    restartButton.style.display = 'flex'

    bomb.removeEventListener('click', win)
}

function win () {
    //stop timer
    clearTimeout(timer);

    //play audio
    victory.play();

    //bomb image
    bomb.setAttribute('src','./assets/images/bomb-stop.png')

    //win text
    document.querySelector('#game h1').textContent = ('Parabéns!');
    document.querySelector('#game h1').style.color = "green";

    //restart button
    restartButton.style.display = 'flex'

    bomb.removeEventListener('click', win)
}
