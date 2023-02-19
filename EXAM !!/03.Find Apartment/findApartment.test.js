const findNewApartment = require('./findApartment');
const expect = require('chai').expect;

describe('findNewApart obj', () => {
  describe('isGoodLocation func', () => {
    it('Should return correct info and have correct inputs', () => {
      expect(findNewApartment.isGoodLocation('Tarnovo', true)).to.equal(
        'This location is not suitable for you.'
      );
      expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal(
        'There is no public transport in area.'
      );
      expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal(
        'You can go on home tour!'
      );
      expect(() => findNewApartment.isGoodLocation(1, false)).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isGoodLocation([], '1')).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isGoodLocation('Sofia', 'true')).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isGoodLocation(true, 'Sofia')).to.throw(
        'Invalid input!'
      );
    });
  });
  describe('isLargeEnough func', () => {
    it('Should check this func is accepting correct input', () => {
      expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal('60');
      expect(findNewApartment.isLargeEnough([40, 50, 60], 40)).to.equal(
        '40, 50, 60'
      );
      expect(() => findNewApartment.isLargeEnough([], 0)).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isLargeEnough([40, 50], '40')).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isLargeEnough(40, 50, 0)).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isLargeEnough('40', [])).to.throw(
        'Invalid input!'
      );
    });
  });
  describe('isItAffordable func', () => {
    it('Should return correct info and have correct input', () => {
      expect(findNewApartment.isItAffordable(1, 1)).to.equal(
        'You can afford this home!'
      );
      expect(findNewApartment.isItAffordable(5, 3)).to.equal(
        "You don't have enough money for this house!"
      );
      expect(() => findNewApartment.isItAffordable('1', '1')).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isItAffordable('1', 1)).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isItAffordable(1, '1')).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isItAffordable([1], 1)).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isItAffordable(1, -1)).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isItAffordable(0, 5)).to.throw(
        'Invalid input!'
      );
      expect(() => findNewApartment.isItAffordable(5, 0)).to.throw(
        'Invalid input!'
      );
    });
  });
});
