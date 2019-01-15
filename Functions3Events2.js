let personObject = {
    name:"God",
    age:217681,
    occupation:"Overlord"
};

function showPerson() {
    window.alert(personObject.name + ", " + personObject.age + ", " + personObject.occupation);
}

function setPerson() {
    personObject.name = document.getElementById("newName").value;
    personObject.age = document.getElementById("newAge").value;
    personObject.occupation = document.getElementById("newOccupation").value;
}

function addAge() {
    personObject.age = Number(personObject.age) + 1;
}
