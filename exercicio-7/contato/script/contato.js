//DOM elements
const button = document.querySelector('#button');
const clean = document.querySelector('#clean');
const viewer = document.querySelector('#showcase');
const input = document.querySelector('#message')

//listeners
button.addEventListener('click', sendMessage);
clean.addEventListener('click', cleaning);
input.addEventListener('keyup', conditioner);

//functions
function sendMessage () {
    const message = document.querySelector('#message').value;
    
    if (message === "") {

    } else {
        viewer.innerHTML += `\n${message}`;
        document.querySelector('#message').value = "";
        document.querySelector('#message').focus();
        viewer.scrollTop = viewer.scrollHeight;
    }

}

function cleaning () {
    viewer.innerHTML = "";
}

function conditioner (e) {
    if (e.keyCode === 13) {
        sendMessage();
    }
}