const cat = {
  name: 'Navcho',
  makeSound() {
    console.log(`${this.name} - meow...`);
  },
};

const navcho = Object.create(cat); // The object is empty but its LINKED to the prototype of 'cat'
console.log(cat == navcho.__proto__); // True

//This iterates through ALL properties and prototypes of the object !!!
// for (const key in object) {
// }

//This iterates through the properties which ONLY the object has BUT not his prototype !
for (const key in cat) {
  if (Object.hasOwnProperty.call(cat, key)) {
    const element = cat[key];
    console.log(element);
  }
}
