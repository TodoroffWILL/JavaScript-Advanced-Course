const isOddOrEven = require('./02.EvenOrOdd');
const expect = require('chai').expect;

describe('Checking if the string is even or odd', () => {
  it('Should be string', () => {
    let func = isOddOrEven('Asd');

    expect(func).to.equal('odd');
  });
  it('Should return undefined if not string', () => {
    expect(isOddOrEven(1)).to.equal(undefined);
    expect(isOddOrEven([])).to.equal(undefined);
    expect(isOddOrEven({})).to.equal(undefined);
  });
  it('Should return even if the length of the parameter is even', () => {
    expect(isOddOrEven('Asdf')).to.equal('even');
  });
});
