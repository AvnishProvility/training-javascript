"use strict";
exports.__esModule = true;
var name = "avnish";
var num = 123;
//let num1:number ="123";
// console.log(name);
function getDetails(id, name, email) {
    console.log("id", id);
    console.log("Name", name);
    if (email != undefined) {
        console.log("email", email);
    }
}
getDetails(11, "Avnish");
getDetails(21, "singh", "avnish@gmail.com");
