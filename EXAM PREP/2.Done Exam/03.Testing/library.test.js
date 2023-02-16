const library = require('./library');
const expect = require('chai').expect;

describe('Test', () => {
  describe('Testing calcPriceOfBook', () => {
    it('Invalid input - name of book', () => {
      expect(() => library.calcPriceOfBook(1, 2)).to.throw('Invalid input');
    });
    it('Invalid input -year', () => {
      expect(() => library.calcPriceOfBook('str', 'str')).to.throw(
        'Invalid input'
      );
    });
    it('Valid data and If year is less or equal 1980', () => {
      expect(library.calcPriceOfBook('The Little Prince', 1943)).to.equal(
        `Price of The Little Prince is 10.00`
      );
      expect(library.calcPriceOfBook('The Little Prince', 1980)).to.equal(
        `Price of The Little Prince is 10.00`
      );
      expect(library.calcPriceOfBook('The Little Prince', 1981)).to.equal(
        `Price of The Little Prince is 20.00`
      );
    });
  });
  describe('Testing findBook', () => {
    it('Invalid empty array', () => {
      expect(() => library.findBook([], 'The little prince')).to.throw(
        'No books currently available'
      );
    });
    it('Valid input available books', () => {
      expect(
        library.findBook(['Troy', 'Life Style', 'Torronto'], 'Troy')
      ).to.equal('We found the book you want.');
    });
    it('Valid input not available books', () => {
      expect(
        library.findBook(['Troy', 'Life Style', 'Torronto'], 'JS is great')
      ).to.equal('The book you are looking for is not here!');
    });
  });
  describe('Testing arangeBooks', () => {
    it('Invalid input', () => {
      expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
      expect(() => library.arrangeTheBooks(0.25)).to.throw('Invalid input');
      expect(() => library.arrangeTheBooks(3.14)).to.throw('Invalid input');
      expect(() => library.arrangeTheBooks('3.14')).to.throw('Invalid input');
    });
    it('Less than available space (39)', () => {
      expect(library.arrangeTheBooks(39)).to.equal(
        'Great job, the books are arranged.'
      );
    });
    it('More than available space (45)', () => {
      expect(library.arrangeTheBooks(45)).to.equal(
        'Insufficient space, more shelves need to be purchased.'
      );
    });
    it('To Equal (40)', () => {
      expect(library.arrangeTheBooks(40)).to.equal(
        'Great job, the books are arranged.'
      );
    });
  });
});
