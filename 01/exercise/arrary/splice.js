// const arr = ["apple", "banana", "mango"];
// const deletedValue = arr.splice(0, 0, "pizza");
// console.log(arr);
// console.log(deletedValue);

var person = [
    { name: "avnish", add: "patna" },
    { name: "gopi", add: "delhi" },
    { name: "mani", add: "chennai" },
    { name: "shabi", add: "hyd" }

]
console.log("orignal array", person);
const data = { name: "raja", add: "lkr" };
const p = person.splice(1, 2, data);
console.log(p);