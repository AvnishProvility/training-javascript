class EasyHttp {

    // Get request
    async get(url) {

        const responce = await fetch(url);
        return await responce.json();


    }

    // POST request

    async post(url, data) {
        const responce = fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return (await responce).json();

    }

    // PUT Request

    async put(url, data) {

        const responce = fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return (await responce).json();


    }

    // delete request

    async delete(url) {

        const responce = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }

        })

        return "Record Deleted";


    }


}