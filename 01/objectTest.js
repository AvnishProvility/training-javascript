var car = {
    name: "Ford",
    model: "m21",
    color: "red"
};
console.log(car.name, car.model);
console.log(car.name.length);

var person = {
    fname: "avnish",
    lName: "Singh",
    age: "22",
    fullName: function() {
        return this.fname + " " + this.lName;
    }

};
console.log(person.fullName());
console.log('current date ' + Date());