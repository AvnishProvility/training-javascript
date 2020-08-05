var arr = [2, 3, 4, 5, 6, 7, 8, 9, 11, 13];
var result = [];
arr.forEach((value) => {
    if (value % 2 === 0) {

        result.push(value);
    }

});
console.log(result);