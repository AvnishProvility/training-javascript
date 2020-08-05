var orgArray = [1, 2, [4, 0]];
var clonedArray = [];

function clone_array(orgArray) {
    // for (let i of orgArray) {
    //     clonedArray.push(i);
    // }
    return orgArray.slice();
}

console.log(clone_array(orgArray));