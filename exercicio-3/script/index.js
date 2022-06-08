//operation option
const count = document.querySelector('#operation');
let option;

count.addEventListener('change', function valueChange () {
    option = count.options[count.selectedIndex].value;
})

if (option === undefined) { option = 'sum' }


//button event
document.querySelector('#submit-button').addEventListener('click', function (e) {
    e.preventDefault()

    //values
    const value1 = parseFloat(document.querySelector('#value1').value, 10);
    const value2 = parseFloat(document.querySelector('#value2').value, 10);

    //result
    const result = document.querySelector('#result')

    if (isNaN(value1) === true || isNaN(value2) === true) { 
        window.alert('Certifique-se de que todos os campos estão preenchidos!')
    
    } else {
            //sum
        if (option === 'sum') {
            result.textContent =(`O valor da soma entre ${value1} e ${value2} é ${value1+value2}. Tente outras operações!`);
            console.log(`${value1} + ${value2} = ${value1+value2}`);
        
            //subtraction
        } else if (option === 'subtraction') {
            result.textContent =(`O valor da subtração entre ${value1} e ${value2} é ${value1-value2}. Tente outras operações!`);
            console.log(`${value1} - ${value2} = ${value1-value2}`);
        
            //multiplication
        } else if (option === 'multiplication') {
            result.textContent =(`O valor da multiplicação entre ${value1} e ${value2} é ${value1*value2}. Tente outras operações!`);
            console.log(`${value1} * ${value2} = ${value1*value2}`);
        
            //division
        } else {
            result.textContent =(`O valor da divisão entre ${value1} e ${value2} é ${value1/value2}. Tente outras operações!`)
            console.log(`${value1} / ${value2} = ${value1/value2}`);
        }
    }
})

