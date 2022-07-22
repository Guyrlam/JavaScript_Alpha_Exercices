//FUNCTION
function messageExibition(err) {
    const message = document.querySelector("#message")
    message.style.color = 'red';
    message.innerHTML = (err);
}

//EXPORT
export {messageExibition}