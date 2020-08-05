function Person(firstName, lastname) {
    this.firstName = firstName;
    this.lastname = lastname;
}

Person.prototype.greeting = function() {
    return `hello ${this.firstName} ${this.lastname}`;
}

const p1 = new Person("avnish", "singh");
//console.log(p1.greeting());

function Customer(firstName, lastname, phone, address) {
    Person.call(this, firstName, lastname);
    this.phone = phone;
    this.address = address;
}

// inherit the person prototype method
Customer.prototype = Object.create(Person.prototype);
const c1 = new Customer("raja", "raj", 984321231, "patna");

console.log(c1.greeting());