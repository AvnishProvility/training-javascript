var arr = [7, 9, 0, -2];

function last_ele(arr, n) {
    if (!n) {
        return arr[arr.length - 1];

    }

    return arr.slice(arr.length - n);
}

console.log(last_ele(arr));