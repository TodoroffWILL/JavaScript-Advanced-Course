const mathEnforcer = require('./04.mathEnforcer');
const expect = require('chai').expect;

describe('Testing an object functionality ', () => {
  it('Should the addFive function', () => {
    expect(mathEnforcer.addFive({})).to.equal(undefined);
    expect(mathEnforcer.addFive([])).to.equal(undefined);
    expect(mathEnforcer.addFive('Hey')).to.equal(undefined);
    expect(mathEnforcer.addFive(5)).to.equal(10);

    expect(mathEnforcer.addFive(-10)).to.equal(-5);
    expect(mathEnforcer.addFive(-5)).to.equal(0);
    expect(mathEnforcer.addFive(0.22)).to.equal(5.22, 0.01);
  });
  it('Should subtract from the function subtractTen', () => {
    expect(mathEnforcer.subtractTen({})).to.equal(undefined);
    expect(mathEnforcer.subtractTen([])).to.equal(undefined);
    expect(mathEnforcer.subtractTen('Hey')).to.equal(undefined);
    expect(mathEnforcer.subtractTen(5)).to.equal(-5);
    expect(mathEnforcer.subtractTen(10)).to.equal(0);
    expect(mathEnforcer.subtractTen(1.42)).to.equal(-8.58, 0.01);
    expect(mathEnforcer.subtractTen(20)).to.equal(10);
  });
  it('Should test the function sum of the obj', () => {
    expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
    expect(mathEnforcer.sum('1', [])).to.equal(undefined);
    expect(mathEnforcer.sum('1', {})).to.equal(undefined);
    expect(mathEnforcer.sum(1, [])).to.equal(undefined);
    expect(mathEnforcer.sum('1', 'Doncho')).to.equal(undefined);

    expect(mathEnforcer.sum(1, 5)).to.equal(6);
    expect(mathEnforcer.sum(-10, 5)).to.equal(-5);
    expect(mathEnforcer.sum(1.45, 1.55)).to.equal(3);
    expect(mathEnforcer.sum(1.5, 5)).to.equal(6.5, 0.01);
    expect(mathEnforcer.sum(1.5, 5)).to.equal(6.5, 0.01);
  });
});
