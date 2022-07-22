//IMPORT
import {climatePromise} from "../promises/climate-promise.js"
import {constructClimate} from "../construtors/climate-construct.js"
import {messageExibition} from "../construtors/message-exibtion.js"

//FUNCTION
function climateInfo(geocode) {
    document.querySelector('body').style.cursor = ('wait');
    return new Promise((resolve,reject) =>{
        climatePromise(geocode)
        .then((resp)=>{
            resolve(constructClimate(resp)) 
        })
        .catch((err) => {
            reject(messageExibition(err))
        })

    })     
}

//EXPORT
export {climateInfo}