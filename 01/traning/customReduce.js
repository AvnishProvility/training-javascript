const fun1 = data => data.toUpperCase();
const fun2 = data => data.split(' ').reverse().join();
let funArr = [fun1, fun2];

const reducerValue = (initialValue, current) => initialValue + current;

const reduce = (reducer, initialValue, array) => {
    let value = initialValue;
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i]
        value = reducer(value, currentValue);
    }
    return value;
}
let reverseAndCap = reduce(reducerValue, 0, funArr[1]("good morning"));
console.log("Custom reduce function " + reverseAndCap);