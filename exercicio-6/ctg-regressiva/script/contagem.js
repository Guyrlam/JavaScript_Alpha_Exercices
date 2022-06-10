//DOM elements
//inputs
const inputs = document.querySelector('#inputs');
const spans = document.querySelector('#timer');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const minClock = document.querySelector('#minutes-clock');
const secClock = document.querySelector('#seconds-clock');
const button = document.querySelector('#start');
//audio
const clock = document.querySelector('#tic-sound');
const sound = document.querySelector('#alarm');

//Variables and constants
let timerSeg;
let timerMin;
let finish;
let alarm;
let chrono;

//listeners
minutes.addEventListener('change', minChange);
seconds.addEventListener('change', secChange);
button.addEventListener('click',timer);

//loops
for (let i = 0; i <= 60; i++) {
    minutes.innerHTML += (`<option>${addZeroes(i,2)}</option>`);
    seconds.innerHTML += (`<option>${addZeroes(i,2)}</option>`);
}

//functions
function addZeroes(numero, nCaracteres) {
    var numberWithZeroes = String(numero);
    var counter = numberWithZeroes.length;
      
    while(counter < nCaracteres) {
        numberWithZeroes = "0" + numberWithZeroes;
        counter++;
    }
  
    return numberWithZeroes;
}

function minChange () {
    minClock.textContent = (minutes.value);
}

function secChange () {
    secClock.textContent = (seconds.value);
}

function timer() {
    button.textContent = ('PARAR');
    button.removeEventListener('click',timer);
    button.addEventListener('click',stop);
    
    if (minutes.value === '0' && seconds.value === '0') {
        window.alert('Cerifique-se de que o valor de tempo inserido é maior do que zero.');
    } else {
        inputs.style.display = 'none';
        spans.style.display = 'flex';

        
        timerMin = Number(minutes.value);
        timerSeg = Number(seconds.value);
        chrono = setInterval(periodsec, 1000);
        finish = setTimeout(ending, ((timerMin * 60 + timerSeg)*950));
        
    }
    
}

function periodsec () {
    if (timerSeg === 0) {
        if(timerMin === 0){
            clearInterval(chrono);
            alarm = setInterval(function(){sound.play()}, 500);
        } else {
            timerMin--;
            clock.play();
            minClock.textContent = (addZeroes(timerMin,2));
            timerSeg = 60;
        }
    } else {
        timerSeg--;
        secClock.textContent = (addZeroes(timerSeg,2));
        clock.play();
    }
}

function ending () {
    document.querySelector('#aplication').style.border = '2px solid #c40233';
    document.querySelector('#aplication-container p').innerHTML= 'O tempo está acabando!'
    document.querySelector('#aplication').style.color = '#c40233';
}

function stop () {
    button.textContent = ('INICIAR');
    inputs.style.display = 'flex'
    spans.style.display = 'none'

    document.querySelector('#aplication').style.border = '0.1px solid rgba(85, 85, 85, 0.266)';
    document.querySelector('#aplication-container p').innerHTML= 'Utilize os campos abaixo para definir um valor para a contagem regressiva:'
    document.querySelector('#aplication').style.color = '#071D41';

    minutes.value = String(minClock.textContent);
    seconds.value = String(secClock.textContent);

    clearInterval(chrono)
    clearInterval(alarm)
    clearTimeout(finish)

    button.addEventListener('click',timer);
}