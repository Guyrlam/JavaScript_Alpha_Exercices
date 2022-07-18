//DOM Elements
//calculator
const input = document.querySelector('#value1');
const input2 = document.querySelector('#value2');
const button = document.querySelector('#submit-button');

//VARIABLES

//LISTENERS
button.addEventListener('click', calculator);

//FUNCTIONS
//factorial calculation
function calculator(){
    let primos = `Os números primos entre ${input.value} e ${input2.value} são: `
    for(let i = Number(input.value); i < Number(input2.value); i++){
        let test = 0;

        for(let x = 1; x < Number(input2.value); x++){
            if(i % x === 0){
                test += 1;
            }
        }

        if(test === 2){
            primos += `${i}, `
            
            document.querySelector('#text-main').innerHTML = (
                `<h1>Resultado</h1>
                ${primos}`
            );
        }
    }
}
