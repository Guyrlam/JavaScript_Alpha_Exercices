//IMPORT
import {initialPage} from "../redirectors/initial-page.js"

//FUNCTION
function constructClimate(reference){
    console.log(reference)
    const page = document.querySelector('#app')
    page.innerHTML = (`
        <div id="climate">
        </div>
    `)
    const climate = document.querySelector('#climate')

    let i = 0;
    for(const date in reference){

        const obj = reference[date]

        if(i < 2){
            climate.innerHTML += `
                <div class="climate-infos">
                <h2>${obj.manha.data} - ${obj.manha.dia_da_semana}</h2>
                    <div id="turn">
                        <div>
                            <h3>Manhã</h3>
                            <div>
                                <img src="${obj.manha.icone}" alt="imagem do tempo">
                            </div>
                            <div>
                                <span class="label">Resumo da Previsão :</span>
                                <span>${obj.manha.resumo_da_previsao}</span>
                            </div>
                            <div>
                                <span class="label">Temperatura Mínima :</span>
                                <span>${obj.manha.temp_min}</span>
                            </div>
                            <div>
                                <span class="label">Temperatura Máxima :</span>
                                <span>${obj.manha.temp_max}</span>
                            </div>
                        </div>
                        <div>
                            <h3>Tarde</h3>
                            <div>
                                <img src="${obj.tarde.icone}" alt="imagem do tempo">
                            </div>
                            <div>
                                <span class="label">Resumo da Previsão :</span>
                                <span>${obj.tarde.resumo_da_previsao}</span>
                            </div>
                            <div>
                                <span class="label">Temperatura Mínima :</span>
                                <span>${obj.tarde.temp_min}</span>
                            </div>
                            <div>
                                <span class="label">Temperatura Máxima :</span>
                                <span>${obj.tarde.temp_max}</span>
                            </div>
                        </div>
                        <div>
                            <h3>Noite</h3>
                            <div>
                                <img src="${obj.noite.icone}" alt="imagem do tempo">
                            </div>
                            <div>
                                <span class="label">Resumo da Previsão :</span>
                                <span>${obj.noite.resumo_da_previsao}</span>
                            </div>
                            <div>
                                <span class="label">Temperatura Mínima :</span>
                                <span>${obj.noite.temp_min}</span>
                            </div>
                            <div>
                                <span class="label">Temperatura Máxima :</span>
                                <span>${obj.noite.temp_max}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else{
            climate.innerHTML += `
                <div class="climate-infos">
                    <h2>${obj.data} - ${obj.dia_da_semana}</h2>
                    <div>
                        <div>
                            <img src="${obj.icone}" alt="imagem do tempo">
                        </div>
                        <div>
                            <span class="label">Resumo da Previsão :</span>
                            <span>${obj.resumo_da_previsao}</span>
                        </div>
                        <div>
                            <span class="label">Temperatura Mínima :</span>
                            <span>${obj.temp_min}</span>
                        </div>
                        <div>
                            <span class="label">Temperatura Máxima :</span>
                            <span>${obj.temp_max}</span>
                        </div>
                    </div>
                </div>
            `;
        }
        
        i++
    }

    climate.innerHTML += ('<button id="return">Voltar</button>');
    document.querySelector('body').style.cursor = ('default');
    document.querySelector('#return').addEventListener('click',initialPage)
}

//EXPORT
export {constructClimate}