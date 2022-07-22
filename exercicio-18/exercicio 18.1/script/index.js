//DOM ELEMENTS
const app = document.querySelector('#app');
const parag = document.querySelector('p');

//Images container
const imagesDiv = document.createElement('div')
imagesDiv.setAttribute('id','container')
app.appendChild(imagesDiv)

//Start button
const initButton = document.createElement('button')
initButton.textContent = 'Sortear Cartas'
initButton.addEventListener('click', deckObj)
app.appendChild(initButton)

//FUNCTIONS
async function pullDeck(){
    try {
        const resp = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        if(resp.status != 200){
            throw new Error('[ERRO]: Não foi possível acessar o deck.')
        }
        return resp.json()
    } catch (err) {
        return Promise.reject(err)
    }
}

async function deckObj (){
    try {
        document.querySelector('body').style.cursor = 'wait'
        initButton.removeEventListener('click', deckObj)
        imagesDiv.innerHTML = '';
        const resp = await pullDeck()
        cardObj(resp['deck_id'])
    } catch (err) {
        parag.textContent = (`${err}`)
    }
    
}

async function pullCard(deck_id){
    try {
        const resp = await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        if(resp.status != 200){
            throw new Error('[ERRO]: Não foi possível retirar a carta do baralho.')
        }
        return resp.json()
    } catch (err) {
        return Promise.reject(err)
    }
}

async function cardObj (data){
    try {
        let image
        for(let i = 0; i < 5; i++){
            const resp = await pullCard(data)
            console.log(resp)
            image = document.createElement('img')
            image.setAttribute('src',`${resp.cards[0].images.png}`)
            imagesDiv.appendChild(image)
        } 
    } catch (err) {
        parag.textContent = (`${err}`)
    } finally {
        document.querySelector('body').style.cursor = 'default'
        initButton.addEventListener('click', deckObj)
    }
}