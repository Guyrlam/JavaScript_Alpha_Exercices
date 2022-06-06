//submit button
const submitBtn = document.querySelector('#submit-button');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()

    //strings value
    const txt1 = document.querySelector('#first-string');
    let value1 = txt1.value;
    let length1 = value1.length;
    const txt2 = document.querySelector('#second-string');
    let value2 = txt2.value;
    let length2 = value2.length;

    //statemente
    const statement = document.querySelector('#statement-text')


    //submit condition
    if (length1 > length2) {

        if (length1 - length2 === 1) {
            statement.textContent = (`O primeiro texto é o maior. Ele tem ${length1 - length2} caractere a mais que o segundo! Tente novamente outra combinação!`);
        } else {
            statement.textContent = (`O primeiro texto é o maior. Ele tem ${length1 - length2} caracteres a mais que o segundo! Tente novamente outra combinação!`);
        }

    } else if (length1 === length2) {

        statement.textContent = (`Ambos os textos têm ${length1} caracteres, ou seja, são do mesmo tamanho! Tente novamente outra combinação!`);

    } else {

        if (length2 - length1 === 1) {
            statement.textContent = (`O segundo texto é o maior. Ele tem ${length2 - length1} caracteres a mais que o primeiro! Tente novamente outra combinação!`);
        } else {
            statement.textContent = (`O segundo texto é o maior. Ele tem ${length2 - length1} caracteres a mais que o primeiro! Tente novamente outra combinação!`);
        }
        
    }

})