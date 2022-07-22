//FUNCTION
function climatePromise(geocode){
    return new Promise((resolve,reject)=>{
        fetch(`https://apiprevmet3.inmet.gov.br/previsao/${geocode}`)
        .then((resp) => {
            if(resp.status === 200){
                return (resp.json())
            } else {
                reject('[ERROR]: Não foi possível exibir os dados relacionados a esse município.');
            }
        })
        .then((resp) => {
            return resp[geocode];
        })
        .then((resp) => {
            const date = new Date()
            let dateString;
            let obj = {};
            
            for(let i = 0; i < 4; i++){
                if(date.getMonth() < 9){
                    dateString = `${date.getDate()+i}/0${date.getMonth()+1}/${date.getFullYear()}`
                } else {
                    dateString = `${date.getDate()+i}/${date.getMonth()+1}/${date.getFullYear()}`
                }

                const reference = resp[dateString]

                if(i<2){
                    obj[dateString] = {
                        "manha": {
                            "data": dateString,
                            "dia_da_semana": reference.manha.dia_semana,
                            "icone": reference.manha.icone,
                            "resumo_da_previsao": reference.manha.resumo,
                            "temp_min": reference.manha.temp_min,
                            "temp_max": reference.manha.temp_max
                        },
                        "tarde": {
                            "data": dateString,
                            "dia_da_semana": reference.tarde.dia_semana,
                            "icone": reference.tarde.icone,
                            "resumo_da_previsao": reference.tarde.resumo,
                            "temp_min": reference.tarde.temp_min,
                            "temp_max": reference.tarde.temp_max
                        },
                        "noite": {
                            "data": dateString,
                            "dia_da_semana": reference.noite.dia_semana,
                            "icone": reference.noite.icone,
                            "resumo_da_previsao": reference.noite.resumo,
                            "temp_min": reference.noite.temp_min,
                            "temp_max": reference.noite.temp_max
                        }
                    }
                } else {
                    obj[dateString] = {
                        "data": dateString,
                        "dia_da_semana": reference.dia_semana,
                        "icone": reference.icone,
                        "resumo_da_previsao": reference.resumo,
                        "temp_min": reference.temp_min,
                        "temp_max": reference.temp_max
                    }
                }
            }
            resolve(obj)
        })
    })
} 

//EXPORT
export {climatePromise}