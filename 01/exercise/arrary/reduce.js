let shoppingCart = [{
        product: 'phone',
        qty: 1,
        price: 6
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20
    }
];

const totalprice =
    shoppingCart.reduce((acc, curr) => {

        return acc + curr.qty * curr.price;
    }, 0);

console.log(totalprice);