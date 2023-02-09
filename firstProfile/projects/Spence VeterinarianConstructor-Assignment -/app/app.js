class AnimalHospital {
    constructor(ownerName, petName, age, animalType, reason) {
        this.ownerName = ownerName;
        this.petName = petName;
        this.age = age;
        this.animalType = animalType;
        this.reason = reason;
    }
}

let patients = [];//creates an array to push newPatient into
let table = document.getElementById("table2");
let btn = document.getElementById("addPatient");
const tableMaker = (arr) => {
    table.innerHTML= "";
    arr.map(obj => {
        let tr = document.createElement("tr");
        let keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            let td = document.createElement("td");//creates a table data element
            let newText = document.createTextNode(obj[keys[i]]);//creates a textNode to appendChild the data
            // console.log(keys[i])
            td.appendChild(newText);
            tr.appendChild(td)
        }
        table.appendChild(tr)
    })

}

btn.addEventListener("click", function () {
    let ownerName = document.getElementById("ownerName");
    // console.log(ownerName)
    let petName = document.getElementById("petName");
    let age = document.getElementById("age");
    let animalType = document.getElementById("animalType");
    let reason = document.getElementById("reason");
    let newPatient = new AnimalHospital(
        ownerName.value,
        petName.value,
        age.value,
        animalType.value,
        reason.value
    )
    patients.push(newPatient)
    tableMaker(patients)
    ownerName.value = "";
    petName.value = "";
    age.value = "";
    animalType.value = "";
    reason.value = ""
    // console.log(newPatient)


})  