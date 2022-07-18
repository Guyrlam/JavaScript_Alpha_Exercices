//DOM Elements
//calculator
const input = document.querySelector('#value1');
const button = document.querySelector('#submit-button');

//VARIABLES


//LISTENERS
window.addEventListener('load', calculator);

//FUNCTIONS
//factorial calculation

function Nilakantha(){
    let calc = 0n;
    for(let i = 0; i < 100000000; i++){
        calc += 4n*10n**100n/BigInt((2+(2*i))*(3+(2*i))*(4+(2*i)))
        console.log(1)
    }
    return calc
}

function calculator() {
    document.querySelector('#text-main span').innerHTML = (
        `3,${Nilakantha()}`
    );
};

