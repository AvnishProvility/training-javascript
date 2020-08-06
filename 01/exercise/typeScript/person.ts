class Person {

    //private firstName : string;
    // private lastName : string;
    // private age : number;

    constructor(private firstName : string,private lastName : string,private age : number) {
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;

    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person("avnish","singh",22);

console.log(person.getFullName());
