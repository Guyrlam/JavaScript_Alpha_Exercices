//button event
document.querySelector('#submit-button').addEventListener('click', function(e) {
    e.preventDefault();

    //value
    const value1 = document.querySelector('#value1').value;

    //event result
    switch(value1){
        case 'first':
            window.alert('Certifique-se de escolher um produto no campo abaixo.');
        default:
            document.querySelector('#figcaption').textContent = '';
            break;
    }

    switch (value1) {
        case 'branca1':
            document.querySelector('#image').setAttribute('src','./assets/images/camisa-branca.jpg');
            break;
        case 'vermelha1':
            document.querySelector('#image').setAttribute('src','./assets/images/camisa-vermelha.jpg');
            break;
        case 'cinza1':
            document.querySelector('#image').setAttribute('src','./assets/images/camisa-cinza.jpg');
            break;
        case 'preta1':
            document.querySelector('#image').setAttribute('src','./assets/images/camisa-preta.jpg');
            break;
        case 'branca2':
            document.querySelector('#image').setAttribute('src','./assets/images/camisa-branca2.jpg');
            break;
        case 'vermelha2':
            document.querySelector('#image').setAttribute('src','./assets/images/camisa-vermelha2.jpg');
            break;
        case 'cinza2':
            document.querySelector('#image').setAttribute('src','./assets/images/camisa-cinza2.jpg');
            break;
        default:
            document.querySelector('#image').setAttribute('src','./assets/images/camisa-preta2.jpg');    
    }
    
})