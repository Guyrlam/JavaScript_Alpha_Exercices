//IMPORT
import {app} from "../../index.js"
import {initialPromise} from "../promises/initial-promise.js"
import {constructSelect} from "../construtors/construct-select.js"
import {messageExibition} from "../construtors/message-exibtion.js"
import {citySelect} from "./city-select.js"

//FUNCTION
function initialPage() {
    app.innerHTML = `
      <div id="initial-page">
  
          <h2>Previsão do Tempo</h2>
  
          <p>Selecione um estado e uma cidade abaixo para conferir a previsão do tempo para eles</p>
  
          <span id="message">Mensagem de erro</span>
          
          <div id="state">
              <select class="select" name="state" id="state-select">
                  <option value="null" class="state-item" disabled selected>Selecione um Estado</option>
              </select>
          </div>
  
          <div id="city">
              <div class="select">Selecione uma Cidade</div>
          </div>
      </div>
    `;

    const state = document.querySelector("#state-select");
    
    document.querySelector("#message").style.color = 'transparent';
  
    selectDetails()
    function selectDetails(){
      return new Promise((resolve,reject) =>{
          initialPromise()
          .then((resp)=>{
              resolve(constructSelect(resp,state)) 
          })
          .catch((err) => {
              reject(messageExibition(err))
          })
      })
    }
  
    state.addEventListener("change", () => {
      citySelect(state.value);
    });
}

//EXPORT
export {initialPage}