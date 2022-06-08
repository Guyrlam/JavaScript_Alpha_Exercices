//button event
document.querySelector('#submit-button').addEventListener('click', function(e) {
    e.preventDefault();

    //values
    const weight = parseFloat(document.querySelector('#value1').value.replace(',','.'));
    const height = parseFloat(document.querySelector('#value2').value.replace(',','.'));

    //IMC calc
    const IMC = (weight / (height * height)).toFixed(1);

    //event result
    if (isNaN(weight) === true || isNaN(height) === true) {
        window.alert('Certifique-se de que todos os campos estão preenchidos com valores reais');
    } else {
        if (IMC <= 18.5) {
            document.querySelector('#result').textContent = (`Seu IMC é igual a ${IMC} ; logo, você está abaixo do peso ideal.`);
        } else if ( IMC > 18.5 && IMC <= 24.9) {
            document.querySelector('#result').textContent = (`Seu IMC é igual a ${IMC} ; logo, você está no peso ideal.`);
        } else if ( IMC > 24.9 && IMC <= 29.9) {
            document.querySelector('#result').textContent = (`Seu IMC é igual a ${IMC} ; logo, você está acima do peso ideal.`);
        } else {
            document.querySelector('#result').textContent = (`Seu IMC é igual a ${IMC} ; logo, você está com obesidade.`);
        }
    }
})