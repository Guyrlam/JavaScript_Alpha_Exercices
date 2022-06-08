document.querySelector('#submit-button').addEventListener('click', function(e) {
    e.preventDefault();

    //sortition
    const sortition = Math.floor(Math.random()*(1000000 - 1000 + 1000)) + 1000;

    //event result
    if (sortition <= 86339) {
        document.querySelector('#result').textContent = (`O perfil sorteado foi de o uma mulher com mais de 60 anos, é o seu? Se não, sorteia de novo aí 🤣`);
    } else if (sortition > 86339 && sortition <= 517000) {
        document.querySelector('#result').textContent = (`O perfil sorteado foi o de uma mulher com menos de 60 anos, é o seu? Se não, sorteia de novo aí 🤣`);
    } else if (sortition > 517000 && sortition <= 919339) {
        document.querySelector('#result').textContent = (`O perfil sorteado foi o de um homem com menos de 60 anos, é o seu? Se não, sorteia de novo aí 🤣`);
    } else if (sortition > 919339 && sortition <= 1000000) {
        document.querySelector('#result').textContent = (`O perfil sorteado foi o de um homem com mais de 60 anos, é o seu? Se não, sorteia de novo aí 🤣`);
    }
    
})