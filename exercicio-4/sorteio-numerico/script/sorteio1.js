document.querySelector('#submit-button').addEventListener('click', function(e) {
    e.preventDefault();

    //values
    const value1 = Math.ceil(Number(document.querySelector('#value1').value.replace(',','.')));
    const value2 = Math.floor(Number(document.querySelector('#value2').value.replace(',','.')));

    //sortition
    const sortition = Math.floor(Math.random()*(value2-value1 +1)) + value1;

    //event result
    if (isNaN(value1) === true || isNaN(value2) === true) { 
        window.alert('Certifique-se de que todos os campos estão preenchidos com valores reais');
    } else if (value1 > value2) { 
        window.alert('Certifique-se de que o valor mínimo é menor que o máximo');
    } else {
        document.querySelector('#result').textContent = (`O número sorteado foi: ${sortition} ! Tente novamente!`);
    }

})