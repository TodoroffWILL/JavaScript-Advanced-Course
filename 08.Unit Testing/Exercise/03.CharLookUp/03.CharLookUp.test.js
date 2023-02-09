const lookupChar = require('./03.CharLookUp');
const expect = require('chai').expect;

describe('Looking up for a char', () => {
  it('Should return undefined if 1st param is not string and second is not num', () => {
    expect(lookupChar(2, '2')).to.equal(undefined);
    expect(lookupChar('2', '2')).to.equal(undefined);
    expect(lookupChar([], '2')).to.equal(undefined);
    expect(lookupChar(2, {})).to.equal(undefined);
    expect(lookupChar(2, 2)).to.equal(undefined);
    expect(lookupChar(2, [])).to.equal(undefined);
    expect(lookupChar('Abqeh', 1.23)).to.equal(undefined);
  });

  it('Should both params to be correct but index is invalid', () => {
    expect(lookupChar('123', -1)).to.equal('Incorrect index');
    expect(lookupChar('123', 5)).to.equal('Incorrect index');
    expect(lookupChar('123', 3)).to.equal('Incorrect index');
    expect(lookupChar('Adelin', 10)).to.equal('Incorrect index');
  });
  it('Should return the char at the specified index', () => {
    expect(lookupChar('Hey', 2)).to.equal('y');
    expect(lookupChar('Adelin', 4)).to.equal('i');
    expect(lookupChar('Doncho', 1)).to.equal('o');
  });
  it('Should check the correct types', () => {
    let a = '1234';
    let b = 3;

    expect(b).to.be.a('number');
    expect(a).to.be.a('string');
  });
});
