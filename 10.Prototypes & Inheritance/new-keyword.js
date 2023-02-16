function Person(name, age) {
  this.name = name;
  this.age = age;

  //It will create function for each instance !!!!
  //   this.greed = function () {
  //     console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old`);
  //
}
// The correct way of adding method !
Person.prototype.greet = function () {
  console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old`);
};
let person = new Person('Doncho', 27);
function newKeyword(constructor, first, second) {
  // 1. Create new object
  let obj = {};
  //2. Set prototype of the object
  Object.setPrototypeOf(obj, constructor.prototype);
  //3. Calls the constructor
  constructor.call(obj, first, second);
  //4. Return create object
  return obj;
}
// Using custom new function

let doncho = newKeyword(Person, 'Doncho', 27);

