const fun1 = data => data.toUpperCase();
const fun2 = data => data.split(' ').reverse().join();

const funArr = [fun2, fun1];
const mainFun = (funs) =>
    x => funs.reduce(
        (acc, itr) => itr(acc),
        x);

const test = mainFun(funArr)("hello good morning");
console.log(test);