const btn = document.querySelector('#btn');
const output = document.querySelector('#output');



function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    // optional = used for spinners/loaders
    xhr.onprogress = function() {
        console.log("ReadyState", this.readyState);

    }
    xhr.onload = function() {
        console.log("ReadyState", this.readyState);
        if (xhr.status === 200) {
            console.log(this.responseText);
            output.innerHTML = `<h3>${xhr.responseText}</h3>`;

        }
    }

    /* xhr.onreadystatechange = function() {
         if (this.status === 200 && this.readyState === 4) {
             console.log(this.responseText);

         }
     }*/

    // error responce
    xhr.onerror = function() {
        console.log("request error...");
    }

    xhr.send();
}
btn.addEventListener('click', loadData);