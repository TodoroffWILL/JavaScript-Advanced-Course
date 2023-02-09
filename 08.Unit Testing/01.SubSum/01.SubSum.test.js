// const assert = require('assert').strict; ASSERT FROM JS
// const assert = require('chai').assert; // ASSERT FROM CHAI
const expect = require('chai').expect;
const cardFactory = require('./01.SubSum');

describe('Sub-sum Calculator', () => {
  it('Should calculate sub-sum when endIndex is larger than length', () => {
    // Arrange
    let expectedSum = 150;
    let nums = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;
    // Act
    let actualSum = cardFactory(nums, startIndex, endIndex);
    //Assert

    // assert.equal(actualSum, expectedSum);
    // EXPECT
    expect(actualSum).to.equal(expectedSum);
    expect(nums).to.be.an('array');
  });

  it('Should calculate sub-sum when startIndex is lower than 0', () => {
    let expectedSum = 60;
    let nums = [10, 20, 30, 40, 50, 60];
    let startIndex = -100;
    let endIndex = 2;
    // Act
    let actualSum = cardFactory(nums, startIndex, endIndex);
    //Assert

    expect(actualSum).to.equal(expectedSum);
  });
  it('Should return NaN when non array is provided for firt argument', () => {
    // Assert
    // assert.equal(Number.isNaN(cardFactory(10, 1, 5)), true);
    // assert.StrictEqual(cardFactory(10, 1, 5), NaN);
    // assert.StrictEqual(cardFactory(true, 1, 5), NaN);
    // assert.StrictEqual(cardFactory(null, 1, 5), NaN);
    // EXPECT Assert
    expect(cardFactory([10, 20, 30], 1, 5)).to.equal(50);
  });
});
// THE AAA Patterin in Unit testing !!!
// if (actualSum == expectedSum) {
//   console.log('Correct');
// } else {
//   console.log('Error');
// }
