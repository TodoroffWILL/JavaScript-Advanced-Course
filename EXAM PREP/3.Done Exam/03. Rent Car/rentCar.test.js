const rentCar = require('./rentCar');
const expect = require('chai').expect;

let catalogue = {
  Volkswagen: 20,
  Audi: 36,
  Toyota: 40,
  BMW: 45,
  Mercedes: 50,
};

describe('Testing rentCar', () => {
  describe('searchCar', () => {
    it('Should Return correct info', () => {
      expect(rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], 'Audi')).to.equal(
        `There is 1 car of model Audi in the catalog!`
      );
    });
    it('Should throw error if no matching', () => {
      expect(() =>
        rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], 'Golf')
      ).to.throw('There are no such models in the catalog!');
    });
    it('Should throw error if not valid inputs(number)', () => {
      expect(() => rentCar.searchCar(1, 'Golf')).to.throw('Invalid input');
      expect(() => rentCar.searchCar(['Audi'], 1)).to.throw('Invalid input');
    });
    it('Should throw error if not valid (string)', () => {
      expect(() => rentCar.searchCar('asd', 'a')).to.throw('Invalid input');
    });
  });
  describe('calculatePriceOfCar', () => {
    it('Should throw error if no valid input (number)', () => {
      expect(() => rentCar.calculatePriceOfCar(5, 'asd')).to.throw(
        'Invalid input!'
      );
    });
    it('Should throw error if no valid input (array)', () => {
      expect(() => rentCar.calculatePriceOfCar(['asd', 'dsa'], 5)).to.throw(
        'Invalid input!'
      );
    });
    it('Correct price for model', () => {
      let rentaCar = rentCar.calculatePriceOfCar('Toyota', 5);
      expect(rentaCar).to.equal(`You choose Toyota and it will cost $200!`);
    });
    it('Model not found', () => {
      expect(() => rentCar.calculatePriceOfCar('Trabant', 10)).to.throw(
        'No such model in the catalog!'
      );
    });
  });
  describe('Checkbudget', () => {
    it('Should throw error if invalid input', () => {
      expect(() => rentCar.checkBudget('1', 1, 0)).to.throw('Invalid input!');
    });
    it('Should throw error if invalid input', () => {
      expect(() => rentCar.checkBudget(1, 1, [])).to.throw('Invalid input!');
      expect(() => rentCar.checkBudget(1, '', [])).to.throw('Invalid input!');
      expect(() => rentCar.checkBudget('', {}, [])).to.throw('Invalid input!');
    });
    it('Should return correct info', () => {
      expect(rentCar.checkBudget(1, 5, 5)).to.equal(`You rent a car!`);
    });
    it('Should return correct info', () => {
      expect(rentCar.checkBudget(1, 5, 0)).to.equal(
        `You need a bigger budget!`
      );
    });
  });
});
