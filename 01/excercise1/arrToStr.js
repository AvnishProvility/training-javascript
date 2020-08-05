var myColor = ["Red", "Green", "White", "Black"];

function colorFun(myColor, plus) {
    return myColor.join(plus);
}
console.log(colorFun(myColor));

console.log(colorFun(myColor, "+"));