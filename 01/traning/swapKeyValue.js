const obj = { name: "avnish", add: "patna" };
const arr = [
    { name: "avnish", add: "patna" },
    { name: "asraf", add: "chennai" },
    { name: "shabi", add: "delhi" },
    { name: "jamal", add: "hyd" },

]

const reverseValue = arr.map((obj) => {
    const newObj = {};
    for (let x in obj) {
        newObj[[obj[x]]] = x;
    }
    return newObj;
});
console.log(reverseValue);