var ages = [1, 2, 3, 5, 19];
console.log(ages.some(isAdult));

function isAdult(age) {
    return age > 18;
}