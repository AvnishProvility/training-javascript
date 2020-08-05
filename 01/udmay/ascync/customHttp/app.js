const http = new EasyHttp();
// http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts)
//     }
// });

const data = { tilte: 'custom post', body: 'this is first custom post.' }

// http.post('https://jsonplaceholder.typicode.com/posts', data, (err, post) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post)
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/5', data, (err, post) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post)
//     }
// });

// delete

http.delete('https://jsonplaceholder.typicode.com/posts/2', (err, responce) => {
    if (err) {
        console.log(err);
    } else {
        console.log(responce);
    }
});