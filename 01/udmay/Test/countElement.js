var arr = ["a", "b", "a", "z", "b", "s", "z"];
var count = {};
arr.forEach((item) => {
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
});
console.log(count);