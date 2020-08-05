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


class Person {

    constructor(fName, lName, email, address, mobile) {
        this.pId = Person.genrateRandomId();
        this.fName = fName;
        this.lName = lName;
        this.address = address;
        this.email = email;
        this.mobile = mobile;
    }
    init() {
        Person.showData();
    }

    // This method show data on page
    static showData() {
            Person.getData();
            if (personList) {

                tBody.innerHTML = "";
                personList.forEach(function(person) {
                    var tr = document.createElement("tr");
                    tr.innerHTML = `
            <td>${
                    person.pId
                }</td>
            <td>${
                    person.fName
                }</td>  
            <td>${
                    person.lName
                }</td>
            <td>${
                    person.address
                }</td>
            <td>${
                    person.email
                }</td>
            <td>${
                    person.mobile
                }</td>
            <td><button type ="button" id="edit-btn">edit</button></td>
            <td><button type ="button" id="delete-btn">delete</button></td>
                    `;
                    tBody.appendChild(tr);
                });
            }

        }
        // This method get data from local storage
    static getData() {
            return personList = JSON.parse(localStorage.getItem("person"));

        }
        // This method get data from DOM
    getDomData(event) {

            event.preventDefault();
            let userDetail = new Person(fName.value, lName.value, email.value, address.value, mobile.value);

            if (userDetail.pId && userDetail.fName && userDetail.lName) {
                personDetails.push(userDetail);
                Person.saveData(personDetails);
                alert("Record inserted successfuly");
                Person.showData();
                Person.cleanField();

            } else {
                alert("please fill the    field");
            }
        }
        // This method save data in local storage
    static saveData(personDetails) {
        var objToString = JSON.stringify(personDetails);
        localStorage.setItem('person', objToString);
    }

    // This method genrate random number
    static genrateRandomId() {
        return Math.floor((Math.random() * 100) + 1);
    }

    // This method clear text field
    static cleanField() {
        pId.value = "";
        fName.value = "";
        lName.value = "";
        address.value = "";
        email.value = "";
        mobile.value = "";
    }


    // onEdit
    onEdit(event) {
            if (event.target.id == "edit-btn") {


                var id = event.target.parentElement.parentElement.cells.item(0).textContent;

                Person.editField(id);
            } else if (event.target.id == "delete-btn") {
                var id = event.target.parentElement.parentElement.cells.item(0).textContent;

                event.target.parentElement.parentElement.remove();
                this.deleteRow(id);
            }
        }
        // Edit
    static editField(id) {
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

    // this method update the record
    updateDetail(event) {
            event.preventDefault();
            let userDetail = new Person(fName.value, lName.value, email.value, address.value, mobile.value);

            personList.splice(position, 1, userDetail);
            Person.saveData(personList);
            Person.showData();
            Person.cleanField();
            uptBtn.style.display = "none";
            submitBtn.style.display = "block";
            div.style.display = "none";


        }
        // This method delete the data
    static deleteRow(id) {

        personList.forEach(function(person, index) {
            if (person.pId == id) {
                personList.splice(index, 1);
                Person.saveData(personList);
            }


        });

    }
}


var person = new Person();

person.init();

tBody.addEventListener("click", person.onEdit);
uptBtn.addEventListener("click", person.updateDetail);
submitBtn.addEventListener("click", person.getDomData);