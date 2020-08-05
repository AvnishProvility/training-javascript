var ages = [1, 2, 3, 5, 19, 25];
console.log(ages.find(isAdult));

function isAdult(age) {
    return age > 18;
}

var guests = [
    { name: 'avnish', age: 22 },
    { name: 'jamal', age: 25 },
    { name: 'shabi', age: 26 },
    { name: 'mani', age: 27 }
];

console.log(guests.indexOf({ name: 'shabi', age: 26 }));