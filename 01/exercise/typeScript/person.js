var Person = /** @class */ (function () {
    //private firstName : string;
    // private lastName : string;
    // private age : number;
    function Person(firstName, lastName, age) {
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var person = new Person("avnish", "singh", 22);
console.log(person.getFullName());
