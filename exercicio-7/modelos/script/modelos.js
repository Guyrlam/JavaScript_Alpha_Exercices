//DOM elements
const model = document.querySelector('#models');

//listeners
model.addEventListener('change', modelSelect);

//functions
function modelSelect () {

    //display change
    switch (model.value) {
        case 'first':
            document.querySelector('#showcase span').style.display = 'flex';
            document.querySelector('#showcase').style.borderColor = 'white';
            document.querySelector('#details').style.display = 'none';
            document.querySelector('#data-models button').style.display = 'none';
        default:
            document.querySelector('#showcase span').style.display = 'none';
            document.querySelector('#showcase').style.borderColor = 'transparent';
            document.querySelector('#details').style.display = 'flex';
            document.querySelector('#data-models button').style.display = 'flex';
    }

    switch (Number(model.value)) {
        case 1: 
            document.querySelector('#showcase').style.backgroundImage = 'url(./assets/images/maserati-ghibli.webp)';
            document.querySelector('#mark').textContent = 'Maserati';
            document.querySelector('#year').textContent = '2021';
            document.querySelector('#engine').textContent = 'V 6';
            document.querySelector('#speed').textContent = '267 Km/h';
            document.querySelector('#acelerate').textContent = '5,5 segundos';
            document.querySelector('#price').textContent = (535370.00).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        break;
        case 2: 
            document.querySelector('#showcase').style.backgroundImage = 'url(./assets/images/maserati-MC20.jpg)';
            document.querySelector('#mark').textContent = 'Maserati';
            document.querySelector('#year').textContent = '2021';
            document.querySelector('#engine').textContent = 'V 6';
            document.querySelector('#speed').textContent = '325 Km/h';
            document.querySelector('#acelerate').textContent = '2,9 segundos';
            document.querySelector('#price').textContent = (2426813.00).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        break;
        case 3: 
            document.querySelector('#showcase').style.backgroundImage = 'url(./assets/images/maserati-quattroporte.webp)';
            document.querySelector('#mark').textContent = 'Maserati';
            document.querySelector('#year').textContent = '2019';
            document.querySelector('#engine').textContent = 'V 8 biturbo';
            document.querySelector('#speed').textContent = '270 Km/h';
            document.querySelector('#acelerate').textContent = '5,6 segundos';
            document.querySelector('#price').textContent = (1601349.00).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        break;
        case 4: 
            document.querySelector('#showcase').style.backgroundImage = 'url(./assets/images/mclaren-540c.webp)';
            document.querySelector('#mark').textContent = 'McLaren';
            document.querySelector('#year').textContent = '2016';
            document.querySelector('#engine').textContent = 'V 8';
            document.querySelector('#speed').textContent = '320 Km/h';
            document.querySelector('#acelerate').textContent = '3,5 segundos';
            document.querySelector('#price').textContent = (2244871.00).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        break;
        case 5: 
            document.querySelector('#showcase').style.backgroundImage = 'url(./assets/images/mclaren-senna.webp)';
            document.querySelector('#mark').textContent = 'McLaren';
            document.querySelector('#year').textContent = '2020';
            document.querySelector('#engine').textContent = 'V 8';
            document.querySelector('#speed').textContent = '335 Km/h';
            document.querySelector('#acelerate').textContent = '2,7 segundos';
            document.querySelector('#price').textContent = (9368625.00).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        break;
        case 6: 
            document.querySelector('#showcase').style.backgroundImage = 'url(./assets/images/mercedes-benz-CLA.webp)';
            document.querySelector('#mark').textContent = 'Mercedes-Benz';
            document.querySelector('#year').textContent = '2022';
            document.querySelector('#engine').textContent = 'Em linha 4';
            document.querySelector('#speed').textContent = '250 Km/h';
            document.querySelector('#acelerate').textContent = '6,2 segundos';
            document.querySelector('#price').textContent = (332900.00).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        break;
        case 7: 
            document.querySelector('#showcase').style.backgroundImage = 'url(./assets/images/jaguar-f-type.jpg)';
            document.querySelector('#mark').textContent = 'Jaguar';
            document.querySelector('#year').textContent = '2020';
            document.querySelector('#engine').textContent = 'V 8';
            document.querySelector('#speed').textContent = '300 Km/h';
            document.querySelector('#acelerate').textContent = '4,1 segundos';
            document.querySelector('#price').textContent = (523744.00).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        break;
        case 8: 
            document.querySelector('#showcase').style.backgroundImage = 'url(./assets/images/lamborghini-huracan-sto.webp)';
            document.querySelector('#mark').textContent = 'Lamborghini';
            document.querySelector('#year').textContent = '2021';
            document.querySelector('#engine').textContent = 'V 10';
            document.querySelector('#speed').textContent = '310 Km/h';
            document.querySelector('#acelerate').textContent = '3,0 segundos';
            document.querySelector('#price').textContent = (6500000.00).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        break;
        case 9: 
            document.querySelector('#showcase').style.backgroundImage = 'url(./assets/images/lamborghini-urus-graphite-capsule.jpg)';
            document.querySelector('#mark').textContent = 'Lamborghini';
            document.querySelector('#year').textContent = '2022';
            document.querySelector('#engine').textContent = 'V 8';
            document.querySelector('#speed').textContent = '305 Km/h';
            document.querySelector('#acelerate').textContent = '3,6 segundos';
            document.querySelector('#price').textContent = (3650100.00).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        break;
        case 10: 
            document.querySelector('#showcase').style.backgroundImage = 'url(./assets/images/audi-RS-e-tron-GT.webp)';
            document.querySelector('#mark').textContent = 'Audi';
            document.querySelector('#year').textContent = '2022';
            document.querySelector('#engine').textContent = 'Elétrico';
            document.querySelector('#speed').textContent = '250 Km/h';
            document.querySelector('#acelerate').textContent = '3,3 segundos';
            document.querySelector('#price').textContent = (999990.00).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        break;
    
    }
    
}