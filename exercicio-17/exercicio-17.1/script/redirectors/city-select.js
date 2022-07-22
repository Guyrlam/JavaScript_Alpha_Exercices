//IMPORT
import {cityPromise} from "../promises/city-promise.js"
import {constructSelect} from "../construtors/construct-select.js"
import {messageExibition} from "../construtors/message-exibtion.js"
import {climateInfo} from "./climate-info.js"

//FUNCTION
function citySelect(uf) {
    document.querySelector('body').style.cursor = ('wait');
    const page = document.querySelector("#city");

    page.innerHTML = `
        <select class="select" name="city" id="city-select">
            <option value="null" class="city-item" disabled selected>Selecione uma Cidade</option>
        </select>
    `;

    const city = document.querySelector("#city-select");

    selectDetails()
    function selectDetails(){
        return new Promise((resolve,reject) =>{
            cityPromise(uf)
            .then((resp)=>{
                resolve(constructSelect(resp,city)) 
            })
            .catch((err) => {
                reject(messageExibition(err))
            })
        })
    }

    city.addEventListener("change", () => {
        climateInfo(city.value);
    });
}

//EXPORT
export {citySelect}