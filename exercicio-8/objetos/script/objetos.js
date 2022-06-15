//Part 2

//Dom elements
const textarea = document.querySelector('#value1');
const button = document.querySelector('#button');

//Listeners
button.addEventListener('click', make);

//functions 
function make() {
    try {   
        const object = JSON.parse(textarea.value);
        window.alert('Parsable JSON string!')
        console.log(object, typeof object)
    } catch (error) {
        window.alert(`Não foi possível realizar a conversão devido a : ${error.message}`)
        console.log(error.message)
    }
}

//Part 3
const objeto = {};

//item a
objeto['um atributo com espaços'] = 1;

//item b
Object.defineProperty(objeto,'outro atributo com espaços', {value: 2});

//result
console.log(objeto);

