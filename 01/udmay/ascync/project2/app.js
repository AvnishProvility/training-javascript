const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#btn1');

const output = document.querySelector('#output');
const outputs = document.querySelector('#outputs');


//for single data
function loadData() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const responce = JSON.parse(this.responseText);
            // console.log(responce);
            output.innerHTML = `<ul>
            <li>Name:${responce.name}</li>
            <li>Age:${responce.age}</li>
            <li>Car:${responce.car}</li>
            </ul>
           `;
        }

    }
    xhr.send();
}


btn.addEventListener('click', loadData);

//multiple record
function loadDatas() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'datas.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const responces = JSON.parse(this.responseText);
            // console.log(responce);
            responces.forEach(responce => {
                outputs.innerHTML += `<ul>
            <li>Name:${responce.name}</li>
            <li>Age:${responce.age}</li>
            <li>Car:${responce.car}</li>
            </ul>
           `;
            });

        }

    }
    xhr.send();
}
btn1.addEventListener('click', loadDatas);