'use strict';
const person = {
  name: 'Doncho',
  age: 22,
  height: 196,
};
//Object.freeze
Object.freeze(person); // Freeze the whole OBJECT, can't add or change any properties! It sets all the Object properties with configurable:false and writable:false
console.log(Object.getOwnPropertyDescriptors(person));
//Object.seal
const clonedPerson = { ...person };
// Alternative
// const clonedPerson = Object.assign({}, person);
Object.seal(clonedPerson); // It seals the OBJECT,which means we can just change the existing properties BUT cannot add any. It sets the Object properties to: configurable:false only.
console.log(Object.getOwnPropertyDescriptors(clonedPerson));


