//FUNCTION
function constructSelect(arr,select){
    arr.forEach((el) => {
        select.innerHTML += `
                <option value="${el.value}" class="state-item">${el.nome}</option>
            `;
    });
    document.querySelector('body').style.cursor = ('default');
}

//EXPORT
export {constructSelect}