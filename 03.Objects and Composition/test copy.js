const compareNumbers = {
  ascending: (a, b) => a - b,
  descending: (a, b) => b - a,
}; // SORTING FUNCTION IN OBJECT

const person = {
  name: "Adelin",
  age: 33,
  sayHi() {
    console.log(`Hello ${this.name}!`); // "this" is referencing to the key name in the object.
  },
};
person.sayHi();
