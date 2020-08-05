var arr = [12, 13, 43, 12, 45, 78, 67, 78, 13];
const orgEle = arr.filter((element, index, arrr) => {
    return arrr.indexOf(element) != index;
});
console.log(orgEle);