var num = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var positive = num.every(isPositive);

function isPositive(num) {
    return num > 0;
}

console.log(positive);