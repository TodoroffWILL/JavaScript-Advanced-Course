class Animal {
  constructor(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} - nom nom`);
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super('Cat', name, age);
  }
  purr() {
    console.log(`${this.name} - purr`);
  }
}

const catTemplate = new Cat('Navuhodonosor', 7);
console.log(catTemplate);
catTemplate.eat();
catTemplate.purr();

catTemplate.__proto__.purr(); // This is the catTemplete prototype
catTemplate.__proto__.__proto__.eat(); // This is the Animal prototype
