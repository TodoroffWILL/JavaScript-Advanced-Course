const sum = require('./04.sumOfNums');
const expect = require('chai').expect;

describe('Sum of Numbers', () => {
  it('Should return the sum of the numbers in the arr', () => {
    let numbers = [1, 2, 3, 4, 5];

    let actualSum = sum(numbers);

    expect(actualSum).to.equal(15);
  });

  it('Should return the sum with negative num in the arr', () => {
    let numbers = [1, 2, 3, 4, -5];

    let actualSum = sum(numbers);

    expect(actualSum).to.equal(5);
  });
});
