//button event
document.querySelector('#submit-button').addEventListener('click', function(e) {
    e.preventDefault();

    //value
    const value1 = new Date(document.querySelector('#value1').value);

    //date details
    //week
    let week;
    switch(value1.getUTCDay()){
        case 0:
            week = 'Domingo';
            break;
        case 1:
            week = 'Segunda-feira';
            break;
        case 2:
            week = 'Terça-feira';
            break;
        case 3:
            week = 'Quarta-feira';
            break;
        case 4:
            week = 'Quinta-feira';
            break;
        case 5:
            week = 'Sexta-feira';
            break;
        case 6:
            week = 'Sábado';
            break;
    }

    //day
    const day = value1.getUTCDate();
    
    //month
    const numberMonth = value1.getUTCMonth() + 1;
    let month;
    switch (numberMonth)  {
        case 0:
            month = 'janeiro';
            break;
        case 1:
            month = 'fevereiro';
            break;
        case 2:
            month = 'março';
            break;
        case 3:
            month = 'abril';
            break;
        case 4:
            month = 'maio';
            break;
        case 5:
            month = 'junho';
            break;
        case 6:
            month = 'julho';
            break;
        case 7:
            month = 'agosto';
            break;
        case 8:
            month = 'setembro';
            break;
        case 9:
            month = 'outubro';
            break;
        case 10:
            month = 'novembro';
            break;
        default:
            month = 'dezembro';
    }

    //year
    const year = value1.getUTCFullYear();

    //timestamp
    const timestamp = value1.getTime();

    //event result
    switch(isNaN(day) || isNaN(numberMonth) || isNaN(year)) {
        case true:
            window.alert('Certifique-se de que o campo de data abaixo está preenchido');
            break;
        default:
            document.querySelector('#result').innerHTML = (
                `<strong>Data:</strong> <br />
                ${week}, ${day} de ${month}(${numberMonth}) de ${year}. <br />
                <strong>Data em milissegundos:</strong> <br />
                ${timestamp}`
            );
    }
})