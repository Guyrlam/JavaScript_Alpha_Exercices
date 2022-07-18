//IMPORT ELEMENTS

//DOM ELEMENTS
const container = document.querySelector('#app')

//VARIABLES

//LISTENERS

//FUNCTIONS
function createQuoter() {

    container.innerHTML = (`
    <section id="quoter">
        <h1>Cotação de Moedas</h1>
        <p>Preencha os campos abaixo para construir uma tabela com a cotação para real de umas das mais de 150 moedas diponíveis</p>
        <select class="bar" name="coin" id="coin-select">
            <option value="initial" disabled selected>Selecione uma moeda</option>
        </select>
        <div id="inputs">
            <div>
                <label for="data1">Data Inicial</label>
                <input class="bar" type="date" id="data1">
            </div>
            <div>
                <label for="data2">Data Final</label>
                <input class="bar" type="date" id="data2">
            </div>
        </div>
        <button>Realizar Cotação</button>
    </section>
    `)

    fetch('https://economia.awesomeapi.com.br/json/all')
        .then((resp) => resp.json())
        .then((data) => {
            for(const coin in data){
                const option = data[coin].name
                if(coin != 'USDT') {
                    document.querySelector('#coin-select').innerHTML += (`
                    <option value="${coin}">${option.replace('/Real Brasileiro','')}</option>
                    `)
                }
            }
        })
        .catch((data) => {
            console.log(data)
        })

    
      
    const button = document.querySelector('#quoter button')
    const date1 = document.querySelector('#data1')
    const date2 = document.querySelector('#data2')
    const select = document.querySelector('#coin-select')
    button.addEventListener('click', ()=>{
        createTable(date1.value,date2.value,select.value)
    })
    
}

function createTable(data1,data2,data3) {

    document.querySelector('body').style.cursor = "wait"

    fetch(`https://economia.awesomeapi.com.br/last/${data3}-BRL`)
    .then((resp)=>{
        return resp.json()
    })
    .then((data)=>{
        let coin;
        for(const element in data){
            coin = data[element].high
        }
        container.innerHTML = (`
        <section id="quoter">
            <h1>Cotação de Moedas</h1>
            <p>Preencha os campos abaixo para construir uma tabela com a cotação para real de umas das mais de 150 moedas diponíveis</p>
            <p>Última Cotação: ${coin}</p>
            <table id="product-list">
                <thead>
                    <tr id="product-header">
                        <th>Data e hora</th>
                        <th>Valor min.</th>
                        <th>Valor máx.</th>
                        <th>Valor de fechamento</th>
                    </tr>
                </thead>
                <tbody id="product-body">
                </tbody>  
            </table>
        </section>
        `)
    })
    .catch((data) => {
        console.log(data)
    })

    const dateInitial = new Date(data1).getTime()
    const dateFinal = new Date(data2).getTime()
    const dateAtual = Date.now()

    fetch(`https://economia.awesomeapi.com.br/json/daily/${data3}-BRL/${parseInt((dateAtual-dateInitial)/(1000*60*60*24))}`)
    .then((resp)=>{
        return resp.json()
    })
    .then((data)=>{
        const sort = data.sort((a,b)=>{
            return a.timestamp - b.timestamp
        })

        let arrayResult = [];
        sort.forEach((element)=>{
            if(((element.timestamp*1000)+(1000*60*60) < (dateFinal)) && ((element.timestamp*1000)+(1000*60*60) > (dateInitial))){
                console.log('certo')
                arrayResult.push(element)
            }
        })

        arrayResult.forEach((element) => {
            const date = new Date((element.timestamp)*1000)
            document.querySelector('#product-body').innerHTML += (
                `<tr>
                    <td>${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()} - ${date.getHours()} : ${date.getMinutes()}</td>
                    <td>${element.low}</td>
                    <td>${element.high}</td>
                    <td>${element.bid}</td>
                </tr>`
            )
        });

        document.querySelector('body').style.cursor = ('default')
    })
    .catch((data) => {
        console.log(data)
    })
}

//EXPORT ELEMENTS
export {createQuoter}