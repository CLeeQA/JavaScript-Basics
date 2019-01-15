let personObject = {
    name:"God",
    age:217681,
    occupation:"Overlord"
};

window.alert(personObject.name + ", " + personObject.age + ", " + personObject.occupation);

function addAge() {
    personObject.age = personObject.age + 1;
    window.alert(personObject.name + ", " + personObject.age + ", " + personObject.occupation);
}