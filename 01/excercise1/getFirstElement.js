var first = [7, 9, 0, -2];
//first = [];

function first_ele(first, n) {
    if (!n) {
        return first[0];
    }
    return first.slice(0, n);
}

console.log(first_ele(first, -3));