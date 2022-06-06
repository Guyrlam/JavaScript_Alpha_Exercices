//submit button
const submitBtn = document.querySelector('#submit-button');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()

    //numbers value
    const number1 = document.querySelector('#first-number');
    let value1 = number1.value;
    console.log (value1)
    const number2 = document.querySelector('#second-number');
    let value2 = number2.value;

    //statement
    const statement = document.querySelector('#statement-text');

    //submit condition
    if (value1 > value2) {

        statement.textContent = (`O número ${value1} é maior que o ${value2}! Tente novamente outra combinação!`);

    } else if (value1 === value2) {

        statement.textContent = (`O número ${value1} é igual ao ${value2}! Tente novamente outra combinação!`);

    } else {

        statement.textContent = (`O número ${value2} é maior que o ${value1}! Tente novamente outra combinação!`);

    }

})