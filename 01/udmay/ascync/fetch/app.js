const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
var output = document.querySelector("#output");

function getTxtData() {
    fetch('data.txt').then((res) => {
            return res.text();
        }).then((data) => {
            console.log(data);
            output.innerHTML = data;
        })
        .catch((err) => {
            console.log(err);
        });

}
btn1.addEventListener('click', getTxtData);

function getJsonData() {
    fetch('jsonData.json').then((res) => {
        return res.json();
    }).then((data) => {
        let result = '';
        data.forEach(value => {
            result += `<li>${value.name}</li>`;
        });
        output.innerHTML = result;
    });
}

btn2.addEventListener('click', getJsonData);


function getExternalApiData() {
    fetch('https://api.github.com/users').then((res) => {
        return res.json();
    }).then((data) => {
        let result = '';
        data.forEach(user => {
            result += `<li>${user.login}</li>`;
        });
        output.innerHTML = result;
    });
}

btn3.addEventListener('click', getExternalApiData);