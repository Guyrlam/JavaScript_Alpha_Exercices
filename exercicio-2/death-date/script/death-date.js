//genre values
let genre = document.querySelector('#genre');
let genValue;
genre.addEventListener('change', function valueChange () {
    genValue = genre.options[genre.selectedIndex].value;
    console.log(genValue);
})

//submit button
const btnSubmit = document.querySelector('#submit-button')

btnSubmit.addEventListener('click', function (e) {
    e.preventDefault()

    //birth date
    //birth day
    let dayBth = document.querySelector('#day');
    let dayValue = dayBth.value;
    //birth month
    let monthBth = document.querySelector('#month');
    let monthValue = monthBth.value;
    //birth year
    let yearBth = document.querySelector('#year');
    let yearValue = yearBth.value;

    //average life
    let averageLife;
    if (genValue === 'male') {
        averageLife = 26681;
    } else {
        averageLife = 29236;
    }

    //atual date
    let atualDate = new Date;
    let atualyear = atualDate.getFullYear();
    let atualmonth = atualDate.getMonth() + 1;
    let atualday = atualDate.getDate();

    //time lived
    let yearsLived = atualyear - yearValue;
    let monthsLived = monthValue - atualmonth;
    let daysLived = dayValue - atualday;
    let timelived = 365*(yearsLived) - 30*(monthsLived) - daysLived;

    //days remaining
    let daysRemaining = averageLife - timelived;

    //statement-text
    const statement = document.querySelector('#statement-text');

    //submit condition
    if (daysRemaining <= 0) {

        statement.textContent = (`Você tem ${daysRemaining} dias de vida. Espera um pouco... Como isso é possível?! 🤯 Tente outra data! 😆`)

    } else {

        statement.textContent = (`Você tem ${daysRemaining} dias de vida. Aproveite eles da melhor forma possível! 😮 Tente outra data 😆`)

    }

})