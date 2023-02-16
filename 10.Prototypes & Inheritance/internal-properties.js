let person = {
  name: 'Doncho',
  age: 20,
};

let internelNamePropertie = Object.getOwnPropertyDescriptor(person, 'name');
console.log(internelNamePropertie);

// Modify internal property of existing property
Object.defineProperty(person, 'name', { enumerable: false });
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// Add new property and configure internal properties
Object.defineProperty(person, 'height', { value: 190, enumerable: false });
// This way the property skips all the iterables like: Object.keys,values,entries , For..in, JSON.stringify()
console.log(person);

// PROPERTIES OF THE PROPERTY
// Enuerable: false -> CAN'T be iterated
// Writable: false -> CAN'T be changed from 190 to 192
// Configurable: false -> CAN'T config any of the other properties.It lock the properties.

// Define more than one property at once
Object.defineProperties(person, {
  name: {
    enumerable: true,
  },
  age: {
    value: 27,
    configurable: false,
  },
});
console.log(person);

// Adding getter
Object.defineProperty(person, 'info', {
  get: function () {
    return `${this.name} - ${this.age}`;
  },
  set: function (value) {
    let [name, ageText] = value.split(' - ');
    this.name = name;
    this.age = Number(ageText);
  },
  enumerable: false,
  configurable: false,
});
person.info = 'Adelin - 33';
console.log(person);

// Configure the OBJECT
