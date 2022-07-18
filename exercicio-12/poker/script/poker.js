//DOM elements
//buttons
const start = document.querySelector('#initial button');
const restart = document.querySelector('#game button');
//cards
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');
const card5 = document.querySelector('#card5');
//displays
const initial = document.querySelector('#initial');
const game = document.querySelector('#game');
//sequence text
const sequenceTxt = document.querySelector('#game p');

//VARIABLES
const cards = [
    {
        'symbol': 2,
        'suit': 'copas',
        'url': './assets/images/cards/2-copas.svg'
    },
    {
        'symbol': 2,
        'suit': 'espadas',
        'url': './assets/images/cards/2-espadas.svg'
    },
    {
        'symbol': 2,
        'suit': 'ouros',
        'url': './assets/images/cards/2-ouros.svg'
    },
    {
        'symbol': 2,
        'suit': 'paus',
        'url': './assets/images/cards/2-paus.svg'
    },
    {
        'symbol': 3,
        'suit': 'copas',
        'url': './assets/images/cards/3-copas.svg'
    },
    {
        'symbol': 3,
        'suit': 'espadas',
        'url': './assets/images/cards/3-espadas.svg'
    },
    {
        'symbol': 3,
        'suit': 'ouros',
        'url': './assets/images/cards/3-ouros.svg'
    },
    {
        'symbol': 3,
        'suit': 'paus',
        'url': './assets/images/cards/3-paus.svg'
    },
    {
        'symbol': 4,
        'suit': 'copas',
        'url': './assets/images/cards/4-copas.svg'
    },
    {
        'symbol': 4,
        'suit': 'espadas',
        'url': './assets/images/cards/4-espadas.svg'
    },
    {
        'symbol': 4,
        'suit': 'ouros',
        'url': './assets/images/cards/4-ouros.svg'
    },
    {
        'symbol': 4,
        'suit': 'paus',
        'url': './assets/images/cards/4-paus.svg'
    },
    {
        'symbol': 5,
        'suit': 'copas',
        'url': './assets/images/cards/5-copas.svg'
    },
    {
        'symbol': 5,
        'suit': 'espadas',
        'url': './assets/images/cards/5-espadas.svg'
    },
    {
        'symbol': 5,
        'suit': 'ouros',
        'url': './assets/images/cards/5-ouros.svg'
    },
    {
        'symbol': 5,
        'suit': 'paus',
        'url': './assets/images/cards/5-paus.svg'
    },
    {
        'symbol': 6,
        'suit': 'copas',
        'url': './assets/images/cards/6-copas.svg'
    },
    {
        'symbol': 6,
        'suit': 'espadas',
        'url': './assets/images/cards/6-espadas.svg'
    },
    {
        'symbol': 6,
        'suit': 'ouros',
        'url': './assets/images/cards/6-ouros.svg'
    },
    {
        'symbol': 6,
        'suit': 'paus',
        'url': './assets/images/cards/6-paus.svg'
    },
    {
        'symbol': 7,
        'suit': 'copas',
        'url': './assets/images/cards/7-copas.svg'
    },
    {
        'symbol': 7,
        'suit': 'espadas',
        'url': './assets/images/cards/7-espadas.svg'
    },
    {
        'symbol': 7,
        'suit': 'ouros',
        'url': './assets/images/cards/7-ouros.svg'
    },
    {
        'symbol': 7,
        'suit': 'paus',
        'url': './assets/images/cards/7-paus.svg'
    },
    {
        'symbol': 8,
        'suit': 'copas',
        'url': './assets/images/cards/8-copas.svg'
    },
    {
        'symbol': 8,
        'suit': 'espadas',
        'url': './assets/images/cards/8-espadas.svg'
    },
    {
        'symbol': 8,
        'suit': 'ouros',
        'url': './assets/images/cards/8-ouros.svg'
    },
    {
        'symbol': 8,
        'suit': 'paus',
        'url': './assets/images/cards/8-paus.svg'
    },
    {
        'symbol': 9,
        'suit': 'copas',
        'url': './assets/images/cards/9-copas.svg'
    },
    {
        'symbol': 9,
        'suit': 'espadas',
        'url': './assets/images/cards/9-espadas.svg'
    },
    {
        'symbol': 9,
        'suit': 'ouros',
        'url': './assets/images/cards/9-ouros.svg'
    },
    {
        'symbol': 9,
        'suit': 'paus',
        'url': './assets/images/cards/9-paus.svg'
    },
    {
        'symbol': 10,
        'suit': 'copas',
        'url': './assets/images/cards/10-copas.svg'
    },
    {
        'symbol': 10,
        'suit': 'espadas',
        'url': './assets/images/cards/10-espadas.svg'
    },
    {
        'symbol': 10,
        'suit': 'ouros',
        'url': './assets/images/cards/10-ouros.svg'
    },
    {
        'symbol': 10,
        'suit': 'paus',
        'url': './assets/images/cards/10-paus.svg'
    },
    {
        'symbol': 'as',
        'suit': 'copas',
        'url': './assets/images/cards/as-copas.svg'
    },
    {
        'symbol': 'as',
        'suit': 'espadas',
        'url': './assets/images/cards/as-espadas.svg'
    },
    {
        'symbol': 'as',
        'suit': 'ouros',
        'url': './assets/images/cards/as-ouros.svg'
    },
    {
        'symbol': 'as',
        'suit': 'paus',
        'url': './assets/images/cards/as-paus.svg'
    },
    {
        'symbol': 12,
        'suit': 'copas',
        'url': './assets/images/cards/dama-copas.svg'
    },
    {
        'symbol': 12,
        'suit': 'espadas',
        'url': './assets/images/cards/dama-espadas.svg'
    },
    {
        'symbol': 12,
        'suit': 'ouros',
        'url': './assets/images/cards/dama-ouros.svg'
    },
    {
        'symbol': 12,
        'suit': 'paus',
        'url': './assets/images/cards/dama-paus.svg'
    },
    {
        'symbol': 11,
        'suit': 'copas',
        'url': './assets/images/cards/valete-copas.svg'
    },
    {
        'symbol': 11,
        'suit': 'espadas',
        'url': './assets/images/cards/valete-espadas.svg'
    },
    {
        'symbol': 11,
        'suit': 'ouros',
        'url': './assets/images/cards/valete-ouros.svg'
    },
    {
        'symbol': 11,
        'suit': 'paus',
        'url': './assets/images/cards/valete-paus.svg'
    },
    {
        'symbol': 13,
        'suit': 'copas',
        'url': './assets/images/cards/rei-copas.svg'
    },
    {
        'symbol': 13,
        'suit': 'espadas',
        'url': './assets/images/cards/rei-espadas.svg'
    },
    {
        'symbol': 13,
        'suit': 'ouros',
        'url': './assets/images/cards/rei-ouros.svg'
    },
    {
        'symbol': 13,
        'suit': 'paus',
        'url': './assets/images/cards/rei-paus.svg'
    },
    {
        'symbol': 'coringa',
        'suit': null,
        'url': './assets/images/cards/coringa.svg'
    },
    {
        'symbol': 'coringa',
        'suit': null,
        'url': './assets/images/cards/coringa.svg'
    }
];

//LISTENERS
start.addEventListener('click', distribute)
restart.addEventListener('click', distribute)

//FUNCTIONS
function distribute() {

    //display change
    initial.style.display = 'none'
    game.style.display = 'flex'

    //array random change
    const sort = cards.sort(() => {
        return Math.floor(Math.random() * (1 + 1)) -1;
    })

    //array removed cards
    const removed = sort.splice(0,5)

    //deck verification
    if(sort.length < 5){
        document.location.reload();
    } else {
        //cards random disribute
        card1.innerHTML = (`<img src="${removed[0].url}" alt="carta do ${cards[0].symbol} de ${cards[0].suit}">`)
        card2.innerHTML = (`<img src="${removed[1].url}" alt="carta do ${cards[1].symbol} de ${cards[1].suit}">`)
        card3.innerHTML = (`<img src="${removed[2].url}" alt="carta do ${cards[2].symbol} de ${cards[2].suit}">`)
        card4.innerHTML = (`<img src="${removed[3].url}" alt="carta do ${cards[3].symbol} de ${cards[3].suit}">`)
        card5.innerHTML = (`<img src="${removed[4].url}" alt="carta do ${cards[4].symbol} de ${cards[4].suit}">`)

        sequenceVerification(removed);
    }
   
}

function orderVerification(array) {
    
    //sequence verification

    let sequence;

    const order = array.sort((a,b)=>{
        if(a.symbol === 'as' || a.symbol === 'coringa'){
            return +1
        } else if (b.symbol === 'as' || b.symbol === 'coringa'){
            return -1
        } else {
            return a.symbol - b.symbol
        }
    })

    order.forEach((card,index)=>{

        if(card.symbol === 'as'){

            if( (order[index-1].symbol === 13 ||
                order[0].symbol === 2 || 
                order[index-1].symbol === 'coringa' && order[index - 2].symbol === 13 || 
                order[index-1].symbol === 'coringa' && order[index-2].symbol === 'coringa' && order[index - 3].symbol === 13) &&
                sequence != false){
                    sequence = true; 
            } else {
                    sequence = false; 
            }

        } else if(card.symbol === 'coringa'){

        } else {
            
            if(index === 0) {
                sequence = true;
            } else if((card.symbol - order[index-1].symbol) === 1 && sequence != false){
                sequence = true;
            } else {
                sequence = false;
            }
        }

    })

    return sequence

}

function sequenceVerification(array) {
    const dois = []
    const tres = []
    const quatro = []
    const cinco = []
    const seis = []
    const sete = []
    const oito = []
    const nove = []
    const dez = []
    const as = []
    const dama = []
    const valete = []
    const rei = []
    const ouros = []
    const espadas = []
    const copas = []
    const paus = []
    const coringa = []

    array.forEach((card) =>{
        //suit verification
        if(card.suit === 'ouros'){
            ouros.push(card)
        } else if (card.suit === 'espadas') {
            espadas.push(card)
        } else if (card.suit === 'copas') {
            copas.push(card)
        } else if (card.suit === 'paus') {
            paus.push(card)
        }
        //symbol verification
        if(card.symbol === 2){
            dois.push(card)
        } else if (card.symbol === 3) {
            tres.push(card)
        } else if (card.symbol === 4) {
            quatro.push(card)
        } else if (card.symbol === 5) {
            cinco.push(card)
        } else if (card.symbol === 6) {
            seis.push(card)
        } else if (card.symbol === 7) {
            sete.push(card)
        } else if (card.symbol === 8) {
            oito.push(card)
        } else if (card.symbol === 9) {
            nove.push(card)
        } else if (card.symbol === 10) {
            dez.push(card)
        } else if (card.symbol === 'as') {
            as.push(card)
        } else if (card.symbol === 11) {
            valete.push(card)
        } else if (card.symbol === 12) {
            dama.push(card)
        } else if (card.symbol === 13) {
            rei.push(card)
        } else {
            coringa.push(card)
        }

    })

    const dataCard = [
        dois,
        tres,
        quatro,
        cinco,
        seis,
        sete,
        oito,
        nove,
        dez,
        valete,
        dama,
        rei,
        as,
        coringa
    ]

    const dataSuit = [
        ouros,
        paus,
        copas,
        espadas,
        coringa
    ]

    result(dataCard,dataSuit,array)
}

function result(arrayCard, arraySuit, arrayDeck) {
    //sequence type
    let straightFlush = 0;
    let quadra = 0;
    let sequencia = 0;
    let trinca = 0;
    let par = 0;

    //type verification
    arrayCard.forEach((group, index)=>{
        if( group.length === 4 ||
            (index != 13 && group.length === 3 && arrayCard[13].length === 1) ||
            (index != 13 && group.length === 2 && arrayCard[13].length === 2)){
            quadra += 1
        } else if(group.length === 3 ||
            (par === 0 && index != 13 && group.length === 2 && arrayCard[13].length === 1) ||
            (index != 13 && group.length === 1 && arrayCard[13].length === 2)) {
            trinca += 1
        } else if(group.length === 2 ||
            (trinca === 0 && index != 13 && group.length === 1 && arrayCard[13].length === 1 && par != 1 )) {
            par += 1
        } else if(orderVerification(arrayDeck) === true) {
            sequencia += 1
            straightFlush += 1
        }
        console.log(arrayCard)
        console.log(straightFlush,quadra,sequencia,trinca,par)
    })

    arraySuit.forEach((group, index)=>{
        if( group.length === 5 ||
            (index != 4 && group.length === 4 && arrayCard[4].length === 1) ||
            (index != 4 && group.length === 3 && arrayCard[4].length === 2)){
            straightFlush += 1
        }
    })

    //result
    if(straightFlush === 2){
        sequenceTxt.innerHTML = ('Parabéns! Você obteve um Straight Flush!')
    } else if (quadra === 1){
        sequenceTxt.innerHTML = ('Parabéns! Você obteve uma Quadra!')
    } else if (trinca === 1 && par === 1 || trinca === 2){
        sequenceTxt.innerHTML = ('Parabéns! Você obteve um Full House!')
    } else if (sequencia === 1){
        sequenceTxt.innerHTML = ('Parabéns! Você obteve uma Sequência!')
    } else if (trinca === 1){
        sequenceTxt.innerHTML = ('Parabéns! Você obteve uma Trinca!')
    } else if (par === 2){
        sequenceTxt.innerHTML = ('Parabéns! Você obteve Dois Pares!')
    } else if (par === 1){
        sequenceTxt.innerHTML = ('Parabéns! Você obteve um Par!')
    } else {
        sequenceTxt.innerHTML = ('Infelizmente, você não obteve nenhuma sequencia')
    }

}

