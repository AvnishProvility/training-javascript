// function fn1(num, callback) {
//     setTimeout(function() {
//         console.log('number', num);
//         callback();
//     }, 4000);
// }

// function fn2() {
//     setTimeout(function() {
//         console.log('hello..');
//     }, 1000);
// }
//fn1(20, fn2);

// promise

function fn1(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let x = 20;
            let y = 21;
            if (x === y) {
                console.log('number', num);
                resolve();
            } else {
                reject();
            }


        }, 4000);
    });

}

function fn2() {
    setTimeout(function() {
        console.log('hello..');
    }, 1000);
}

fn1(30).then(fn2).catch(() => {
    console.log("Somthing Wrong");
});