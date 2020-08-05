var arr = [2, 3, 4, 5, 9, 7, 8, 9, 11, 13];
var result = [];
// arr.forEach((value) => {
//     if (value % 2 != 0) {

//         result.push(value);
//     }

// });
// console.log(result);

// odd index value
arr.forEach((value, index, arrr) => {
    if (index % 2 != 0) {
        result.push(arrr[index]);
    }
});
console.log(result);