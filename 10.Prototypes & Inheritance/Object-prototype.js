let person = {
    name:'Doncho',
    age: 27
}

let personPrototype = Object.getPrototypeOf(person);
personPrototype.weight = 100; // Sets the value of the PROTOTYPE which is LINKED to the "person" object !!! but object doesn't have it !!
console.log(personPrototype);
console.log(person); // It doesnt add the property to the object
console.log(person.weight) // But here it calls its LINKED prototype to get it!
