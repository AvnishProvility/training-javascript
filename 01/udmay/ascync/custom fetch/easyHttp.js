class EasyHttp {

    // Get request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    resolve(data);
                }).catch((err) => reject(err));
        });
    }

    // POST request

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    // PUT Request

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    // delete request

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }

                })
                .then(res => res.json())
                .then(data => resolve("data deleted.."))
                .catch(err => reject(err));
        });

    }


}