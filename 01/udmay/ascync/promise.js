const getId = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve([2, 1, 3, 4, 5, 6]);
    }, 2000);
});

getId.then(id => { console.log(id) }).catch(() => { console.log("sothing wrong..") });