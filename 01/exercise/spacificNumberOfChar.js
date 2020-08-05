var str = "avnish singh";
var pos = 4;
console.log(truncateString(str, pos));

function truncateString(str, pos) {
    return str.slice(0, pos);
}