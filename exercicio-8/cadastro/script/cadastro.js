//Dom elements
//inputs
const userName = document.querySelector('#name');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const genre = document.querySelector('#genre');
//button
const button = document.querySelector('#button');

//variables and constants
const user = {
    'name': null,
    'birthDate': null,
    'weight': null,
    'height': null,
    'gender': null
}
let detect;
let detect1;
let detect2;

//listeners
button.addEventListener('click', submit);

//functions
function submit() {
    try {
        //name
        try {
            detect = userName;
            const valueName = userName.value
            if (valueName.length < 5) {
                throw new Error(`Field "${userName.value}" is invalid!`)
            }
            user.name = valueName;
            userName.style.borderBottom = '2px solid rgb(29,105,140)';
        } catch (error) {
            console.log(error.message)
            throw new Error(`Certifique-se de preencher o campo de nome com no mínimo cinco caracteres: ${error.message}.`)     
        }
        

        //birthDate
        try {
            detect = year;
            detect1 = day;
            detect2 = month;
            const date = new Date (Number(year.value), Number(month.value) -1, Number(day.value));
            const today = new Date;
            if ((year.value === '' || Number(year.value) < 1) || (month.value === '' || Number(month.value) > 12 || Number(month.value) < 1) || (day.value === '' || Number(day.value) > 31 || Number(day.value) < 1 ) || (date.getTime() > today.getTime())) {
                throw new Error(`Field "${(day.value)}/${(month.value)}/${(year.value)}" is invalid!`);
            }
            user.birthDate = date;
            year.style.borderBottom = '2px solid rgb(29,105,140)';
            month.style.borderBottom = '2px solid rgb(29,105,140)';
            day.style.borderBottom = '2px solid rgb(29,105,140)';
        } catch (error) {
            console.log(error.message);
            throw new Error(`Certifique-se de preencher os campos de data com uma anterior à atual: ${error.message}.`)
        }
        
        //weight
        try {
            detect = weight;
            detect1 = null;
            detect2 = null;
            const weightnum = parseFloat(weight.value.replace(',','.'))
            if (isNaN(weight.value.replace(',','.')) === true || weight.value === ""){
                throw new Error(`Field "${weight.value}" is invalid!`)
            }
            user.weight = weightnum.toFixed(3);
            weight.style.borderBottom = '2px solid rgb(29,105,140)';
        } catch (error) {
            console.log(error.message);
            throw new Error(`Certifique-se de preencher o campo de peso com no um valor numérico, racional e positivo: ${error.message}.`)
        }
        

        //height
        try {
            detect = height;
            const heightnum = parseInt(height.value)
            if (Number.isInteger(Number(height.value.replace(',','.'))) === false || height.value === ""){
                throw new Error(`Field "${height.value}" is invalid!`);
            }
            user.height = heightnum;
            height.style.borderBottom = '2px solid rgb(29,105,140)';
        } catch (error) {
            console.log(error.message);
            throw new Error(`Certifique-se de preencher o campo de altura com no um valor numérico natural: ${error.message}.`)
        }

        //gender
        try {
            genre.style.borderBottom = '2px solid rgb(29,105,140)';
            detect = genre;
            const gender = genre.value;
            if ((gender != 'male') && (gender != 'female')){
                throw new Error(`Field "${gender}" is invalid!`);
            }
            user.gender = gender;
        } catch (error) {
            console.log(error.message);
            throw new Error(`Certifique-se de selecionar uma das opções de gênero: ${error.message}.`)
        }

        //result
        window.alert(`name: ${user.name}\nbirthDate: ${user.birthDate}\nweight: ${user.weight} kg\nheight: ${user.height} cm\ngender: ${user.gender}\nuser string: ${JSON.stringify(user)}`)
        console.log(user)


    } catch(error){
        window.alert(error.message)
        detect.style.borderBottom = '2px solid red';
        if(detect1 != null && detect2 != null) {
            detect1.style.borderBottom = '2px solid red';
            detect2.style.borderBottom = '2px solid red';
        }
    }
   
}