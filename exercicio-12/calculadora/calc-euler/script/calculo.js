//DOM Elements
//calculator
const input = document.querySelector('#value1');
const button = document.querySelector('#submit-button');

//VARIABLES


//LISTENERS
button.addEventListener('click', calculator);

//FUNCTIONS
//factorial calculation
function potential(value,potency){
    let calc = 1n;
    for(let i = 1; i <= potency; i++){
        calc *= BigInt(value)
    }
    return(calc)
}

function factorial(value) {
    let calc = 1n;
    for(let i = 1n; i <= value; i++){
        calc = BigInt(calc) * i;
    };
    return(calc);
};

function euler(value){
    let calc = 1;
    for(let i = 1n; i <= 200; i++){
        calc += Number(potential(value,i))/Number(factorial(i))
    };
    return(calc)
}

function calculator() {
    document.querySelector('#text-main').innerHTML = (
        `<h1>Resultado</h1>
        <p style="font-size: 2.2vw;">${input.value}! = ${String(factorial(input.value))}</p>
        <p style="font-size: 2.2vw;">e<sup>${input.value}</sup> = ${String(euler(input.value))}</p>`
    );
};
