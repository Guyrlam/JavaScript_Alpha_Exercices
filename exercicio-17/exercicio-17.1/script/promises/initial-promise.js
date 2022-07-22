//FUNCTION
function initialPromise(){
    return new Promise((resolve,reject)=>{
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((resp) => {
            if(resp.status === 200){
                return (resp.json())
            } else {
                reject('[ERROR]: Não foi possível selecionar este estado.');
            }
        })
        .then((data) => {
            const sort = data.sort((a, b) => {
            return a.nome.localeCompare(b.nome);
            });

            const arr = [];

            sort.forEach((el) => {
                const obj = {
                    "value": el.sigla,
                    "nome": el.nome
                }
                arr.push(obj)
            });

            resolve(arr)
        });
    });
}

//EXPORT
export {initialPromise}