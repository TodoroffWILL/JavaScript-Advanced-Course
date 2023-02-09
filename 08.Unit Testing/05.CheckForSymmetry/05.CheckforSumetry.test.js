const isSymmetric = require('./05.CheckforSymetry');
const expect = require('chai').expect;

describe('isSymmetric(arr)', () => {
  it('should return false for [1,2,3,4,2,1]', () => {
    expect(isSymmetric([1, 2, 3, 4, 2, 1])).to.be.equal(false);
  });

  it('should return false for [-1,2,1]', () => {
    expect(isSymmetric([-1, 2, 1])).to.be.equal(false);
  });

  it('should return true for [1]', () => {
    expect(isSymmetric([1])).to.be.equal(true);
  });
  it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", () => {
    expect(
      isSymmetric([5, 'hi', { a: 5 }, new Date(), { a: 5 }, 'hi', 5])
    ).to.be.equal(true);
  });
  it('should return false for 1,2,2,1', () => {
    expect(isSymmetric(1, 2, 2, 1)).to.be.equal(false);
  });
});
