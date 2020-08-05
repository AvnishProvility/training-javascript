var str = "asdfghjkl zxcv ppe g";
console.log(str.length);
//console.log(str[7]);

console.log(str.indexOf("a"));

str = "app aa' bb";
//return spacific index of value
var res = str.slice(2, 5);
//console.log(res);

var str1 = "avnish";
// add two string in single string
const strConc = str.concat(str1);
//console.log(strConc);

// split method convert string to array
console.log(strConc.split(" "));

// include method return true or false
str = " Car Laptop volvo";
console.log(str.includes("laptop"));

// uppercase lowercase
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
// lastIndexOf return last index of value
console.log(str.lastIndexOf("o"));
console.log(str.indexOf("o"));