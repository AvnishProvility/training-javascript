const http = new EasyHttp;

// http.get("https://jsonplaceholder.typicode.com/users")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// User Data
const data = {
        name: "avnish",
        address: "patna",
        email: "avnish@gmail.com"
    }
    // http.post("https://jsonplaceholder.typicode.com/users", data)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));

// http.put("https://jsonplaceholder.typicode.com/users/5", data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

http.delete("https://jsonplaceholder.typicode.com/users/5")
    .then(data => console.log(data))
    .catch(err => console.log(err));