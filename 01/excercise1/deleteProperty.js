var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

function deleteProp(student) {
    console.log(student);
    delete student.rollno;
    console.log(student);
}

deleteProp(student);