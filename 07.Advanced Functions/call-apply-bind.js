// Call

function introduce(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName},my name is ${this.name}`);
}
introduce('Adelin', 'Ghanayem'); // Global invocation; = window
let person = {
  name: 'Doncho',
};

// Basically call and apply working the same way with the differens of what types of arguments they recieve.
introduce.call(person, 'Adelin', 'Ghanayem'); // invoke using call
introduce.apply(person, ['Iliya', 'Daskalov']); // invoke using apply

let superHuman = {
  name: 'Superman',
};
let superIntroduction = introduce.bind(superHuman);
// It generates a whole new function with the same functionalities of the ones that we binded.
superIntroduction('Pesho', 'Geya'); // It looks like its Global invocation but its not because it was presetted/binded BEFORE !!!
