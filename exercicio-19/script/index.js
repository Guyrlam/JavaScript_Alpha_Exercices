//DOM ELEMENTS
const app = document.querySelector('#app')
//VARIABLES
let randomArray;
let randomInterval;

//LISTENERS
window.onload = transitionPage('BINGO!','Seja o primeiro a preencher sua cartela!');

//FUNCTIONS
function transitionPage(title,text){
    app.innerHTML = ''

    const newDiv = document.createElement('div')
    newDiv.id = ('transition')
    app.appendChild(newDiv)

    const newTitle = document.createElement('h1')
    newTitle.textContent = `${title}`
    newDiv.appendChild(newTitle)

    const newText = document.createElement('p')
    newText.textContent = `${text}`
    newDiv.appendChild(newText)

    const newSelect = document.createElement('select')
    newSelect.setAttribute('id',`select`)
    newDiv.appendChild(newSelect)

    for(let i = 0; i < 5; i++){
        const newOption = document.createElement('option')
        newOption.setAttribute('value',`${i+1}`)
        if (i === 0){
            newOption.textContent = `${i+1} Jogador`
        } else {
            newOption.textContent = `${i+1} Jogadores`
        }
        newSelect.appendChild(newOption)
    }

    const select = document.querySelector('#select')

    const newBtn = document.createElement('button')
    newBtn.textContent = `JOGAR AGORA!`
    newBtn.onclick = (()=>{
        app.innerHTML = ``

        const newTitle = document.createElement('h1')
        newTitle.textContent = `BINGO!`
        app.appendChild(newTitle)

        const newText = document.createElement('p')
        newText.textContent = `Preste atenção nos números sorteados e preencha sua respectiva cartela:`
        app.appendChild(newText)

        const newSection = document.createElement('section')
        newSection.setAttribute('id','random')
        app.appendChild(newSection)

        const newDeck = document.createElement('div')
        newDeck.setAttribute('class','deck')
        app.appendChild(newDeck)

        const card = cardManagement()
        card.creation(select.value)

        const random = randomManagement()
        randomInterval = setInterval(random.addition,5000)

        randomArray = []
    })
    newDiv.appendChild(newBtn)
}


function cardManagement(){
    let num;
    const deck = [];

    function random(i, array){
        if(i === 0 || i === 11){
            num = 'marked'
        } else {
            num = (Math.floor(Math.random() * (75)) + 1)
            array.forEach((el)=>{
                if(el === num){
                    return random(i,array)
                }
            })
        }
        
        return num
    }

    function creation(unities){
        for(let x = 0; x < unities; x++){
            const card = [];
            for(let i = 0; i < 12; i++){
                num = random(i,card)
                card.push(num) 
            }
            const sort = card.sort((a,b)=>{
                return (a - b)
            })
            deck.push(sort)
        }
        construct(deck)
    }


    function construct(array){
        const newDeck = document.querySelector('.deck')
        newDeck.innerHTML = ''

        array.forEach((card,index)=>{
            const newDiv = document.createElement('div')
            newDiv.setAttribute('class','container')
            newDeck.appendChild(newDiv)

            const title = document.createElement('h2')
            title.textContent = (`Jogador ${index+1}`)
            newDiv.appendChild(title)

            const newCard = document.createElement('div')
            newCard.setAttribute('class',`card`)
            newDiv.appendChild(newCard)
            
            card.forEach((el, index2)=>{
                const newElement = document.createElement('div')
                newElement.setAttribute('class',`card-el`)
                
                if(el != 'marked'){
                    newElement.textContent = (`${el}`)
                    newElement.addEventListener('click',()=>{
                        randomArray.forEach((num)=>{
                            if(num === el){
                                array[index][index2] = 'marked'
                                verification(array)
                            }
                        })
                    })
                } else {
                    newElement.setAttribute('class',`last-el`)
                }

                newCard.appendChild(newElement)
            })
        })
    }

    function verification(array){
        let marked;
        array.forEach((card,index)=>{
            marked = 0
            card.forEach((el)=>{
                if(el === 'marked'){
                    marked++
                }
            })
            if(marked === 12){
                clearInterval(randomInterval)
                transitionPage(`PARABÉNS!`,`O JOGADOR ${index+1} VENCEU! Joguem novamente!`)
            } else{
                construct(array) 
            }
        })
    }

    return {
        'creation': creation
    }

}

function randomManagement(){
    let num;
    let i = 0;

    function random(i, array){
        num = (Math.floor(Math.random() * (75)) + 1)
        array.forEach((el)=>{
            if(el === num){
                return random(i,array)
            }
        })
        
        return num
    }

    function addition(){
        if(randomArray.length === 75){
            clearInterval(randomInterval)
            document.querySelector('p').textContent = 'Todas as peças já foram sorteadas! Verifique novamente suas cartelas!'
            document.querySelector('p').style.color = 'red'
        }
        num = random(i,randomArray)
        randomArray.push(num)
        construct(randomArray)
        i++
    }

    function construct(array){
        const randomSection = document.querySelector('#random')
        randomSection.innerHTML = ''

        array.forEach((el)=>{
            const newElement = document.createElement('div')
            newElement.setAttribute('class',`card-el`)
            newElement.textContent = (`${el}`)
            randomSection.appendChild(newElement)
        })
    }

    return{
        'addition': addition
    }
}


