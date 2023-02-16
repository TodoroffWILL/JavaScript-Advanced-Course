function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
  //It will create function for each instance !!!!
  //   this.greed = function () {
  //     console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old`);
  //
}
// The correct way of adding method !
Person.prototype.greet = function () {
  console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old`);
};

let person = new Person('Doncho', 27, 196);
let person2 = new Person('Adelin', 33, 188);
person.greet();
person2.greet();
