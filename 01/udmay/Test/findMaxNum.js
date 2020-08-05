var arr = [11, 43, 56, 23, 78, 65, 45, 90, 98, 45];
arr.sort((a, b) => {
    return a - b;
});
console.log(arr[arr.length - 1]);