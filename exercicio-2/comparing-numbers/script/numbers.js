//submit button
const submitBtn = document.querySelector('#submit-button');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()

    //numbers value
    const number1 = document.querySelector('#first-number');
    let value1 = Number(number1.value);
    const number2 = document.querySelector('#second-number');
    let value2 = Number(number2.value);

    console.log(typeof value1)

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