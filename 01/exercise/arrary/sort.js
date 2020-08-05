var name = ['raj', 'avnish', 'singh', 'kumar'];

//console.log(name.sort());

var num = [23, 12, 45, 104, 34, 56, 67];
num.sort(customCompare);
//console.log(num);

// Custom compare function
function customCompare(a, b) {
    return a - b;
}

var products = [{
        name: 'laptop',
        price: 200
    },
    {
        name: 'desktop',
        price: 800
    },
    {
        name: 'phone',
        price: 600
    }
];
products.sort((a, b) => {
    return a.price - b.price;
});
console.log(products);