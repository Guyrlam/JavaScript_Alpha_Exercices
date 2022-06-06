//genre values
const genre = document.querySelector('#genre');
let genValue;
genre.addEventListener('change', function valueChange () {
    genValue = genre.options[genre.selectedIndex].value;
})

//submit button
const btnSubmit = document.querySelector('#submit-button')

btnSubmit.addEventListener('click', function (e) {
    e.preventDefault()

    //birth date
    //birth day
    const dayValue = Number(document.querySelector('#day').value);
    //birth month
    const monthValue = Number(document.querySelector('#month').value);
    //birth year
    const yearValue = Number(document.querySelector('#year').value);

    //average life
    let averageLife;
    if (genValue === 'male') {
        averageLife = 26681;
    } else {
        averageLife = 29236;
    }

    //atual date
    const atualDate = new Date;
    const atualyear = atualDate.getFullYear();
    const atualmonth = atualDate.getMonth() + 1;
    const atualday = atualDate.getDate();

    //time lived
    const yearsLived = atualyear - yearValue;
    const monthsLived = monthValue - atualmonth;
    const daysLived = dayValue - atualday;
    const timelived = 365*(yearsLived) - 30*(monthsLived) - daysLived;

    //days remaining
    const daysRemaining = averageLife - timelived;

    //statement-text
    const statement = document.querySelector('#statement-text');

    //submit condition
    if (daysRemaining <= 0) {

        statement.textContent = (`Você tem ${daysRemaining} dias de vida. Espera um pouco... Como isso é possível?! 🤯 Tente outra data! 😆`)

    } else {

        statement.textContent = (`Você tem ${daysRemaining} dias de vida. Aproveite eles da melhor forma possível! 😮 Tente outra data 😆`)

    }

})