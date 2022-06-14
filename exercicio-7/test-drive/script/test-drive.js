//DOM elements
const CPF = document.querySelector('#cpf');
const alert1 = document.querySelector('#alert');

//variables
let length1;
let value1 = '';

//listener
CPF.addEventListener('keyup', limitant);
CPF.addEventListener('keyup', mask);
CPF.addEventListener('keydown', backspace);

//function
function limitant (event) {
    length1 = CPF.value.length;

    if ((event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105 || event.keyCode === 8) && (length1 <= 14)) {
        value1  = CPF.value;
        alert1.style.color = 'transparent'
    } else {
        CPF.value = value1;
        alert1.style.color = 'red'
    }
} 

function mask (event) {
    length1 = CPF.value.length;
    console.log(length1)

    if (event.keyCode != 8){
        if (length1 === 3 || length1 === 7) {
            CPF.value += '.'
        } else if (length1 === 11) {
            CPF.value += '-'
        }
    }
}
