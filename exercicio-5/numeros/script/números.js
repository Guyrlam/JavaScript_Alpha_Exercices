//button event
document.querySelector('#submit-button').addEventListener('click', function(e) {
    e.preventDefault();

    //value
    const value1 = parseFloat(document.querySelector('#value1').value);

    //event result
    switch (value1) {
        case 0:
            document.querySelector('#result').textContent = (`O número ${value1} é escrito da seguite forma: zero.`);
            break;  
        case 1:
            document.querySelector('#result').textContent = (`O número ${value1} é escrito da seguite forma: um.`);
            break;  
        case 2:
            document.querySelector('#result').textContent = (`O número ${value1} é escrito da seguite forma: dois.`);
            break;  
        case 3:
            document.querySelector('#result').textContent = (`O número ${value1} é escrito da seguite forma: três.`);
            break;  
        case 4:
            document.querySelector('#result').textContent = (`O número ${value1} é escrito da seguite forma: quatro.`);
            break;  
        case 5:
            document.querySelector('#result').textContent = (`O número ${value1} é escrito da seguite forma: cinco.`);
            break;  
        case 6:
            document.querySelector('#result').textContent = (`O número ${value1} é escrito da seguite forma: seis.`);
            break;  
        case 7:
            document.querySelector('#result').textContent = (`O número ${value1} é escrito da seguite forma: sete.`);
            break;  
        case 8:
            document.querySelector('#result').textContent = (`O número ${value1} é escrito da seguite forma: oito.`);
            break;  
        case 9:
            document.querySelector('#result').textContent = (`O número ${value1} é escrito da seguite forma: nove.`);
            break;  
        case 10:
            document.querySelector('#result').textContent = (`O número ${value1} é escrito da seguite forma: dez.`);
            break;
        default:
            window.alert('Certifique-se de que o campo abaixo está preenchido com um valor inteiro de 0 a 10')
    }
    console.log(value1)

})