//DOM Elements
//calculator
const input = document.querySelector('#value1');
const button = document.querySelector('#submit-button');

//VARIABLES


//LISTENERS
button.addEventListener('click', calculator);

//FUNCTIONS
//factorial calculation
function factorial(value) {
    let calc = 1;
    for(let i = 1n; i <= value; i++){
        calc = BigInt(calc) * i;
    };
    return(calc);
};

function calculator() {
    document.querySelector('#text-main').innerHTML = (
        `<h1>Resultado</h1>
        <p style="font-size: 2.2vw;">${input.value}! = ${String(factorial(input.value))}</p>`
    );
    console.log(String(factorial(input.value))[20])
}