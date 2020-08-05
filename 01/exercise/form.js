var form = document.querySelector("#form");
var pId = document.querySelector("#pid");
var fName = document.querySelector("#fName");
var lName = document.querySelector("#lName");
var address = document.querySelector("#add");
var email = document.querySelector("#email");
var mobile = document.querySelector("#mobile");
var submitBtn = document.querySelector(".sub-btn");
var tr = document.querySelector("#tr")
var tBody = document.querySelector("#tbody");
var uptBtn = document.querySelector("#upt-btn");
var div = document.querySelector("#pId-div");
var position;
var personDetails = [];
var personList = [];
uptBtn.style.display = "none";
div.style.display = "none";
submitBtn.addEventListener("click", getUserInfo);

function init() {

    showDetails();
}

function showDetails() {
    getData();
    if (personList) {

        tBody.innerHTML = "";
        personList.forEach(function(person) {
            var tr = document.createElement("tr");
            tr.innerHTML = `
        <td>${person.pId}</td>
        <td>${person.fName}</td>  
        <td>${person.lName}</td>
        <td>${person.address}</td>
        <td>${person.email}</td>
        <td>${person.mobile}</td>
        <td><button type ="button" id="edit-btn">edit</button></td>
        <td><button type ="button" id="delete-btn">delete</button></td>
                `;
            tBody.appendChild(tr);
        });
    }

}

function getData() {
    return personList = JSON.parse(localStorage.getItem("person"));

}
init();

function UserDetail(fName, lName, email, address, mobile) {
    this.pId = genrateRandomId();
    this.fName = fName;
    this.lName = lName;
    this.address = address;
    this.email = email;
    this.mobile = mobile;
}



function getUserInfo(event) {

    event.preventDefault();
    let userDetail = new UserDetail(fName.value, lName.value, email.value, address.value, mobile.value);

    if (userDetail.pId && userDetail.fName && userDetail.lName) {
        personDetails.push(userDetail);
        saveData(personDetails);
        alert("Record inserted successfuly");
        showDetails();
        cleanField();

    }
}

function saveData(personDetails) {
    var objToString = JSON.stringify(personDetails);
    localStorage.setItem('person', objToString);
}


function genrateRandomId() {
    return Math.floor((Math.random() * 100) + 1);
}


function cleanField() {
    pId.value = "";
    fName.value = "";
    lName.value = "";
    address.value = "";
    email.value = "";
    mobile.value = "";
}

tBody.addEventListener("click", onEdit);

function onEdit(event) {
    if (event.target.id == "edit-btn") {


        var id = event.target.parentElement.parentElement.cells.item(0).textContent;

        editField(id);
    } else if (event.target.id == "delete-btn") {
        var id = event.target.parentElement.parentElement.cells.item(0).textContent;

        event.target.parentElement.parentElement.remove();
        deleteRow(id);
    }
}

function editField(id) {
    personList.forEach(function(person, index) {
        if (person.pId == id) {
            pId.value = person.pId;
            fName.value = person.fName;
            lName.value = person.lName;
            address.value = person.address;
            email.value = person.email;
            mobile.value = person.mobile;
            uptBtn.style.display = "block";
            submitBtn.style.display = "none";
            div.style.display = "block";
            position = index;
        }
    });

}
uptBtn.addEventListener("click", updateDetail);

function updateDetail(event) {
    event.preventDefault();

    let userDetail = new UserDetail(fName.value, lName.value, email.value, address.value, mobile.value);

    personList.splice(position, 1, userDetail);
    saveData(personList);
    showDetails();

    cleanField();
    uptBtn.style.display = "none";
    submitBtn.style.display = "block";
    div.style.display = "none";


}

function deleteRow(id) {

    personList.forEach(function(person, index) {
        if (person.pId == id) {
            personList.splice(index, 1);
            saveData(personList);
        }


    });

}