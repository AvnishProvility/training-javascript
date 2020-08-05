var name = "avnish,Singh";

var array = stringToArray(name);
console.log(array);

function stringToArray(name) {
    return name.split(",");
}