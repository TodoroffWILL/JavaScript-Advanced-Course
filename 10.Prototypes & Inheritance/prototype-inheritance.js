function Animal(type, name, age) {
  this.name = name;
  this.age = age;
  this.type = type;
}
Animal.prototype.makeSound = function () {
  console.log(`${this.name} - meow...`);
};

const cat = new Animal('Cat', 'Garry', 4);

function Cat(name, age) {
  Animal.call(this, 'Cat', name, age);
}
Cat.prototype = Object.create(Animal.prototype);
let navcho = new Cat('Navuhodonosor', 7);
navcho.makeSound();

console.log(navcho);
