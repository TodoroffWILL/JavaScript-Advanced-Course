class Cat {
  static legNumber = 4;
  isHungry = true;
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name}: Miay!`);
  }

  static vetCheck(cat) {
    if (cat.isHungry) {
      console.log('This cat should be fed!');
    } else {
      console.log('This cat is fine');
    }
  }
}
let cat = new Cat('Navcho');
cat.makeSound();
// Static is called on the CLASS not like the method on the new object!
Cat.vetCheck(cat); // 1st class,2nd static method,3th instance of which class:(cat);

//Static property;
console.log(Cat.legNumber)