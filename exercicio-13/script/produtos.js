//DOM elements
const field = document.querySelectorAll('.field');
const turn = document.querySelector('#turn');
const game = document.querySelector('#game');
const reload = document.querySelector('#reload');


//VARIABLES
let symbol = 'x';
const arr = [
    ['','',''],
    ['','',''],
    ['','','']
]

//LISTENERS
reload.addEventListener('click', restart)

//FUNCTIONS
field.forEach((el,index)=> {
    el.dataset.id = index;

    el.onclick = function mark() {

        const unit = document.querySelector(`[data-id = '${index}']`);

        switch(unit.dataset.id) {
            case '0':
                arr[0][0] = symbol;
                break;
            case '1':
                arr[0][1] = symbol;
                break;
            case '2':
                arr[0][2] = symbol;
                break;
            case '3':
                arr[1][0] = symbol;
                break;
            case '4':
                arr[1][1] = symbol;
                break;
            case '5':
                arr[1][2] = symbol;
                break;
            case '6':
                arr[2][0] = symbol;
                break;
            case '7':
                arr[2][1] = symbol;
                break;
            default:
                arr[2][2] = symbol;
        }

        if(symbol === 'x') {
            symbol = 'o'
            turn.textContent = 'Vez do 𐤏'
            el.innerHTML = '<div id="x"><div>'
        } else {
            symbol = 'x'
            turn.textContent = 'Vez do X'
            el.innerHTML = '<div id="o"><div>'
        }

        verification(arr);

        el.onclick = null
    };

    function verification(result) {
        if (
            //horizontal
            result[0][0] != '' &&
            result[0][0] === result[0][1] && result[0][0] === result[0][2] ||
            result[1][0] != '' &&
            result[1][0] === result[1][1] && result[1][0] === result[1][2] ||
            result[2][0] != '' &&
            result[2][0] === result[2][1] && result[2][0] === result[2][2] ||
            //vertical
            result[0][0] != '' &&
            result[0][0] === result[1][0] && result[0][0] === result[2][0] ||
            result[0][1] != '' &&
            result[0][1] === result[1][1] && result[0][1] === result[2][1] ||
            result[0][2] != '' &&
            result[0][2] === result[1][2] && result[0][2] === result[2][2] ||
            //diagonal
            result[0][0] != '' &&
            result[0][0] === result[1][1] && result[0][0] === result[2][2] ||
            result[0][2] != '' &&
            result[0][2] === result[1][1] && result[0][2] === result[2][0] 
        ) {

            if(symbol === 'x') {
                turn.textContent = 'Vencedor: 𐤏'
            } else {
                turn.textContent = 'Vencedor: X'
            }
            turn.style.fontSize = '2vw'
            reload.style.display = 'flex'
            game.style.display = 'none'

        } else if (
            result[0][0] != '' &&
            result[0][1] != '' &&
            result[0][2] != '' &&
            result[1][0] != '' &&
            result[1][1] != '' &&
            result[1][2] != '' &&
            result[2][0] != '' &&
            result[2][1] != '' &&
            result[2][2] != '' 
        ){
            turn.textContent = 'Deu velha! Empatou!'
            turn.style.fontSize = '2vw'
            reload.style.display = 'flex'
            game.style.display = 'none'
        }
    }
})

function restart() {
    window.location.reload();
};