let personObject = {
    name:"God",
    age:217681,
    occupation:"Overlord"
};

window.alert(personObject.name + ", " + personObject.age + ", " + personObject.occupation);

personObject.age = 27;

window.alert(personObject.name + ", " + personObject.age + ", " + personObject.occupation);