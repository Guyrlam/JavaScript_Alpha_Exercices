//submit button
const submitBtn = document.querySelector('#submit-button');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()

    //strings value
    let length1 = document.querySelector('#first-string').value.length;
    let length2 = document.querySelector('#second-string').value.length;

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