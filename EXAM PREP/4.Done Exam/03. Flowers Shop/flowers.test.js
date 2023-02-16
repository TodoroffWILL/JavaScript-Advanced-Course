const flowerShop = require('./flowerShop');
const expect = require('chai').expect;

describe('flowerShop', () => {
  describe('calcPriceOfFlowers function', () => {
    it('Should throw error in invalid input', () => {
      expect(() => flowerShop.calcPriceOfFlowers('1', '1', '1')).to.throw(
        'Invalid input!'
      );
    });
    it('Should throw error with invalid input (2)', () => {
      expect(() => flowerShop.calcPriceOfFlowers(1, 1, '1')).to.throw(
        'Invalid input!'
      );
    });
    it('Should return expected output', () => {
      expect(flowerShop.calcPriceOfFlowers('a', 1, 5)).to.equal(
        `You need $5.00 to buy a!`
      );
    });
    it('Should return expected output', () => {
      expect(flowerShop.calcPriceOfFlowers('b', 0, 5)).to.equal(
        `You need $0.00 to buy b!`
      );
    });
  });
  describe('checkFlowersAvailable func', () => {
    it('Should return expected result', () => {
      expect(
        flowerShop.checkFlowersAvailable('Orchid', ['Orchid', 'Lilly', 'Rose'])
      ).to.equal(`The Orchid are available!`);
    });
    it('Should return expected result', () => {
      expect(
        flowerShop.checkFlowersAvailable('Orchid', ['Lilly', 'Rose'])
      ).to.equal(`The Orchid are sold! You need to purchase more!`);
    });
  });
  describe('sellFlowers func', () => {
    it('Should check for valid input', () => {
      expect(() => flowerShop.sellFlowers({}, 1)).to.throw('Invalid input!');
    });
    it('Should check for valid input', () => {
      expect(() => flowerShop.sellFlowers([], [])).to.throw('Invalid input!');
    });
    it('Should check for valid input', () => {
      expect(() => flowerShop.sellFlowers(['Lilly'], -1)).to.throw(
        'Invalid input!'
      );
    });
    it('Should check for valid input', () => {
      expect(() => flowerShop.sellFlowers(['Lilly'], 2)).to.throw(
        'Invalid input!'
      );
    });
    it('Should remove element from the array', () => {
      expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 2)).to.equal(
        'Rose / Lily'
      );
    });
  });
});
