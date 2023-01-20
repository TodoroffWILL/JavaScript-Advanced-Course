const compareNumbers = {
  ascending: (a, b) => a - b,
  descending: (a, b) => b - a,
}; // SORTING FUNCTION IN OBJECT

const person = {
  name: "Adelin",
  age: 33,
  sayHi() {
    console.log(`Hello ${this.name}!`);
  },
};
person.sayHi();
