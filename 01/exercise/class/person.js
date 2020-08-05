class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.personDetail = function() {
            return this.name + " " + this.age;
        }
    }
}
man = new Person("avnish", 22);
//console.log(man);
// adding new property in existing object
man.address = "patna";
//console.log(man);
// calling constructor function
console.log(man.personDetail());