var ages = [1, 2, 3, 5, 19, 25];
console.log(ages.findIndex(isAdult));

function isAdult(age) {
    return age > 18;
}