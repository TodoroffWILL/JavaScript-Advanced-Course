const motorcycleRider = require('./Motorcycle Rider');
const expect = require('chai').expect;

describe('Testing Motorcycle object', () => {
  describe('licenseRestriction func', () => {
    it('Should return correct speed', () => {
      expect(motorcycleRider.licenseRestriction('AM')).to.equal(
        'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
      );
      expect(motorcycleRider.licenseRestriction('A1')).to.equal(
        'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
      );
      expect(motorcycleRider.licenseRestriction('A2')).to.equal(
        'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
      );
      expect(motorcycleRider.licenseRestriction('A')).to.equal(
        'No motorcycle restrictions, and the minimum age is 24.'
      );
      expect(() => motorcycleRider.licenseRestriction(1)).to.throw(
        'Invalid Information!'
      );
      expect(() => motorcycleRider.licenseRestriction({})).to.throw(
        'Invalid Information!'
      );
      expect(() => motorcycleRider.licenseRestriction(['a'])).to.throw(
        'Invalid Information!'
      );
      expect(() => motorcycleRider.licenseRestriction('A12')).to.throw(
        'Invalid Information!'
      );
    });
  });
  describe('motorCycleRoom func', () => {
    it('Should accepts array and num and doing the correct thing', () => {
      expect(
        motorcycleRider.motorcycleShowroom(['125', '250', '600'], 125)
      ).to.equal('There are 1 available motorcycles matching your criteria!');
      expect(
        motorcycleRider.motorcycleShowroom(['125', '250', '600'], 51)
      ).to.equal('There are 0 available motorcycles matching your criteria!');
      expect(
        motorcycleRider.motorcycleShowroom(['125', '250', '600'], 700)
      ).to.equal('There are 3 available motorcycles matching your criteria!');
      expect(() => motorcycleRider.motorcycleShowroom('a', '1')).to.throw(
        'Invalid Information!'
      );
      expect(() =>
        motorcycleRider.motorcycleShowroom(['1', '2', '3'], '1')
      ).to.throw('Invalid Information!');
      expect(() => motorcycleRider.motorcycleShowroom('1', 1)).to.throw(
        'Invalid Information!'
      );
      expect(() => motorcycleRider.motorcycleShowroom(['a'], -1)).to.throw(
        'Invalid Information!'
      );
      expect(() => motorcycleRider.motorcycleShowroom(['a', 'b'], 0)).to.throw(
        'Invalid Information!'
      );
      expect(() => motorcycleRider.motorcycleShowroom([], 49)).to.throw(
        'Invalid Information!'
      );
    });
  });
  describe('otherSPendings func', () => {
    it('Should return correct ammount of cash', () => {
      expect(
        motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)
      ).to.equal(`You spend $270.00 for equipment and consumables!`);
      expect(
        motorcycleRider.otherSpendings(['jacked'], ['oil filter'], true)
      ).to.equal(
        `You spend $297.00 for equipment and consumables with 10% discount!`
      );
      expect(() =>
        motorcycleRider.otherSpendings('jacked', ['oil'], 1)
      ).to.throw('Invalid Information!');
      expect(() =>
        motorcycleRider.otherSpendings(['jacked'], ['oil'], 'true')
      ).to.throw('Invalid Information!');
      expect(() => motorcycleRider.otherSpendings(1, 'a', 'false')).to.throw(
        'Invalid Information!'
      );
    });
  });
});
