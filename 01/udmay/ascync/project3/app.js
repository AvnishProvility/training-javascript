const btn = document.querySelector('#btn');
const num = document.querySelector('#num');
var jokes = document.querySelector('#jokes');

function loadJokes() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${num.value}`, true);
    xhr.onload = function() {
        if (this.status === 200) {
            const responces = JSON.parse(this.responseText);

            if (responces.type === 'success') {
                responces.value.forEach(responce => {
                    jokes.innerHTML += `<ul><li>${responce.joke}</li></ul>`
                });
            }
            // console.log(responce);
        }


    }
    xhr.onerror = function() {
        console.log("request error...");
    }
    xhr.send();
    // e.preventDefault();
}
btn.addEventListener('click', loadJokes);