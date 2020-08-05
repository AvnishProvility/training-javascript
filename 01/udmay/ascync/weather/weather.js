function loadWeather() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `as`, true);
    xhr.onload = function() {
        const report = JSON.parse(this.responseText());
    }
    xhr.onerror = function() {
        console.log("Invalid request..");
    }
    xhr.send();


}