//button event
document.querySelector('#submit-button').addEventListener('click', function(e) {
    e.preventDefault();

    //value
    const value1 = Number(document.querySelector('#value1').value.replace(',','.'));

    //event result
    if (isNaN(value1) === true) {
        window.alert('Certifique-se de que todos os campos estão preenchidos com valores reais');
    } else if (Number.isInteger(value1) === true) {
        document.querySelector('#result').textContent = (`O valor ${value1} já está arredondado.`);
    } else {
        document.querySelector('#result').textContent = (`O valor arredondado imediatamente maior ao preenchido é ${Math.ceil(value1)} e o menor é ${Math.floor(value1)}.`);
    }
})