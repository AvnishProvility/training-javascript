function EasyHttp() {
    this.http = new XMLHttpRequest();
}
// GET HTTP REQUEST
EasyHttp.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    //let self =this;
    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(null, this.http.responseText);
        } else {
            callback('error : ' + this.http.status);
        }

    }


    this.http.send();
}

// HTTP POST REQUEST
EasyHttp.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callback(null, this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

// HTTP PUT REQUEST
EasyHttp.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callback(null, this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

// HTTP DELETE REQUEST

EasyHttp.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    //let self =this;
    this.http.onload = () => {
        if (this.http.status === 200) {

            callback(null, 'Post Deleted');
        } else {
            callback('error : ' + this.http.status);
        }

    }
    this.http.send();
}