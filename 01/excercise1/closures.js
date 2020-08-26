const outerFun = (a, b) => {
    //const b = 20;
    const innerFun = () => {
        let sum = a + b;
        return sum;
    }
    return innerFun();

}

const result = outerFun(2, 4);
console.log(result);