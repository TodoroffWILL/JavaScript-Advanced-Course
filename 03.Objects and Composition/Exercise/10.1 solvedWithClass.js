class Mage {
  constructor(name, health, mana) {
    this.name = name;
    this.health = health;
    this.mana = mana;
  }
  cast(spell) {
    this.mana--;
    console.log(`${this.name} cast ${spell}`);
  }
}
class Fighter {
  constructor(name, health, stamina) {
    this.name = name;
    this.health = health;
    this.stamina = stamina;
  }
  fight() {
    this.stamina--;
    console.log(`${this.name} slashes at the foe!`);
  }
}
const mage = new Mage("Scorcher", 100, 100);
mage.cast("fireball");
mage.cast("thunder");
mage.cast("light");
console.log(mage.mana);

const figher = new Fighter("Doncho", 100, 100);
figher.fight();
console.log(figher.stamina);
