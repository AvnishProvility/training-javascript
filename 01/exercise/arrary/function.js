function add(a, b) {
    return a + b;
}

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, add);

console.log(result);

//

function square(x) {
    return x = x * x;

}
var y = 10;
square(y);
console.log(y);