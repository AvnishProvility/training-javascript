let person = {
    name: "avnish",
    age: 22,
    email: "avnish@gmail.com"
}

for (let prop in person) {
    console.log(person[prop]);
    // console.log(prop);
}


/*for (let y of person) {
    console.log(y);
}*/
var arr = ["avnish", "raja", "mani", "gopi"];
for (let x of arr) {
    //console.log(arr[x]);
    console.log(x);
}

var res = function() {
    return "Hello";
}
console.log(res());

// constructor
function Car(name, model) {
    this.name = name;
    this.model = model;
}

var emp = {
    name: 'gopi',
    id: 2
}
for (let prop in emp) {
    console.log(emp[prop]);
}