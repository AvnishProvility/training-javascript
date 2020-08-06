var student = {
    name: "david Rayy",
    sclass: "vi",
    rollno: 12
}

function propertyList(student) {

    return Object.keys(student).toString();

}

console.log(propertyList(student));