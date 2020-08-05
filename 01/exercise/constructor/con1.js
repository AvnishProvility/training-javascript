function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function Motorcycle(make, model, year, motorcycleType) {
    Vehicle.call(this, make, model, year)
    this.motorcycleType = motorcycleType;
}

var fruits = [{
        name: "apple",
        price: 200
    },
    {
        name: "apple1",
        price: 300
    },
    {
        name: "apple2",
        price: 300
    },
    {
        name: "apple3",
        price: 400
    },
    {
        name: "apple4",
        price: 500
    },
    {
        name: "apple5",
        price: 600
    }

];

var fruitItems = fruits.find(function(fruit) {

    return fruit.price == 300;
});
//console.log(fruitItems);

var fruitName = fruits.map(function(fruit) {
    return fruit.name;
});

//console.log(fruitName);

// filter
var fruitPrice = fruits.filter((fruit) => {
    return fruit.price > 400;
});

console.log(fruitPrice);

// toString
var car = ["ford", "volvo", 12, "tata"];
var str = car.toString();
console.log(str);

// constructor
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function Motorcycle(make, model, year, motorcycleType) {
    Vehicle.call(this, make, model, year);
    this.motorcycleType = motorcycleType;
}

var moto = new Motorcycle("Kawasaki", "Ninja 1000", 2020, "Sports");

//console.log(moto);