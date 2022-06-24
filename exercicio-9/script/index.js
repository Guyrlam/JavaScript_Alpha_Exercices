//DOM elements
const button = document.querySelector('#button');
const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const selector = document.querySelector('#operation');
const result = document.querySelector('#result');

//listeners
button.addEventListener('click', submit);

//functions
function submit() {
    
    //variables
    let x = Number(value1.value);
    let z = Number(value1.value);
    let y = Number(value2.value);
    let w = 0;

    //verification and result
    try {
        if (value1.value === '' || value2.value === '') {
            throw new Error(`Certifique-se de preencher ambos os campos com números inteiros!`);
        }

        //operations listeners
        switch(selector.value) {

            //sum listener
            case 'sum':
                if (Number.isInteger(x) === false || Number.isInteger(y) === false || x < 0 || y < 0) {
                    throw new Error(`[sum] Impossible to sum ${x} + ${y}.`);
                } 
                result.textContent =(`O valor da soma entre ${value1.value} e ${value2.value} é ${sum(x,y)}. Tente outras operações!`); 
                break;

            //subtraction listener
            case 'subtraction':
                if (Number.isInteger(x) === false || Number.isInteger(y) === false || x < 0 || y < 0 || y > x) {
                    throw new Error(`[subtract] Impossible to subtract ${x} - ${y}.`);
                }
                result.textContent =(`O valor da subtração entre ${value1.value} e ${value2.value} é ${subtraction(x,y)}. Tente outras operações!`);
                break;

            //multiplication listener
            case 'multiplication':
                if (Number.isInteger(x) === false || Number.isInteger(y) === false || x < 0 || y < 0){
                    throw new Error(`[multiply] Impossible to multiply ${x} * ${y}.`);
                }
                result.textContent =(`O valor da multiplicação entre ${value1.value} e ${value2.value} é ${multiplication(x,y,z)}. Tente outras operações!`);
                break;

            //potentiation listener
            case 'potentiation':
                if (Number.isInteger(x) === false || Number.isInteger(y) === false || x < 0 || y < 0) {
                    throw new Error(`[potentiate] Impossible to raise ${x} to ${y}.`);
                }
                result.textContent =(`O valor de ${value1.value} elevado a  ${value2.value} é ${potentiation(x,y,z,w)}. Tente outras operações!`);
                break;
                
            //division listener  
            default:
                if (Number.isInteger(x) === false || Number.isInteger(y) === false || x < 0 || y < 0) {
                    throw new Error(`[divide] Impossible to divice ${x} to ${y}.`);
                } else if (y === 0) {
                    throw new Error(`[divide] Division by zero`);
                }
                result.textContent =(`O valor da divisão entre ${value1.value} e ${value2.value} é ${division(x,y,w)} e o seu resto é ${rest(x,y,w)}. Tente outras operações!`);  
        }
    
    //message error
    } catch (error) {
        result.textContent = (error.message);
    }
}

//sum function
function sum(a,b) {
    if (b === 0) {
        return a;
    } else {
        return sum(a^b , (a&b) << 1);
    }
}

//subtraction function
function subtraction(a,b) {
    if (b === 0) {
        return a;
    } else {
        return subtraction(a^b , (~a&b) << 1);
    }
}

//multiplication function
function multiplication(a,b,c) {
     if (b === 1) {
        return a;
    } else {
        a = sum(a,c);
        b = subtraction(b,1);
        return multiplication(a,b,c);  
    }
}

//potentiation function
function potentiation(a,b,c) {
     if (b === 1) {
        return a;
    } else { 
        a = multiplication(a,c,a);
        b = subtraction(b,1);
        console.log(a,b,c)   
        return potentiation(a,b,c);  
    }
}

//division function
function division(a,b,c) {
     if (b > a) {
        return c;
    } else {
        a = subtraction(a,b);
        c = sum(c,1);
        return division(a,b,c); 
    }
}

//division rest function
function rest(a,b,c) {
    c = division(a,b,c);
    b = multiplication(c,b,c);
    a = subtraction(a,b);
    return a;
}

