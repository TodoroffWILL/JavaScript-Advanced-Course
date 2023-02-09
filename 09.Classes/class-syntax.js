class Cat {
  // Making default property of the object. No let,no const needed!
  isHungry = true;
  constructor(name) {
    this.name = name;
    isHungry = true; // Default value in the constructor.
  }
  makeSound() {
    console.log(`${this.name}: Miay!`);
  }
}

let firstCat = new Cat('Doncho');
let secondCat = new Cat('Adelin');
console.log(firstCat);
console.log(secondCat);

secondCat.name = 'Mishy';
console.log(secondCat);

// Second Example
let catNames = ['Navcho', 'Garry', 'Mishy', 'Zuza', 'Sisa'];
let cats = catNames.map((x) => new Cat(x));
cats.forEach((x) => x.makeSound());

// instanceof returns boolean: true/false!
console.log(catNames instanceof Cat); // True
console.log(catNames instanceof Object);// True;

