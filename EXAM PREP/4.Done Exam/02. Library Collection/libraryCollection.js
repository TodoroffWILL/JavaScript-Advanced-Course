class LibraryCollection {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.books = [];
  }
  addBook(bookName, bookAuthor) {
    if (this.capacity == this.books.length) {
      throw new Error('Not enough space in the collection.');
    }
    this.books.push({
      bookName,
      bookAuthor,
      payed: false,
    });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }
  payBook(bookName) {
    const foundBook = this.books.find((x) => x.bookName == bookName);
    if (!foundBook) {
      throw new Error(`${bookName} is not in the collection.`);
    }
    if (foundBook.payed) {
      throw new Error(`${bookName} has already been paid.`);
    }
    foundBook.payed = true;
    return `${bookName} has been successfully paid.`;
  }
  removeBook(bookName) {
    const foundBook = this.books.find((x) => x.bookName == bookName);

    if (!foundBook) {
      throw new Error("The book, you're looking for, is not found.");
    }
    if (foundBook.payed == false) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    } else if (foundBook.payed == true) {
      let index = this.books.indexOf(foundBook);
      this.books.splice(index, 1);
      return `${bookName} remove from the collection.`;
    }
  }
  getStatistics(bookAuthor) {
    if (bookAuthor === undefined) {
      let result = `The book collection has ${
        this.capacity - this.books.length
      } empty spots left.\n`;
      this.books
        .sort((a, b) => {
          a.bookName.localeCompare(b.bookName);
        })
        .forEach(
          (el) =>
            (result += `${el.bookName} == ${el.bookAuthor} - ${
              el.payed == true ? 'Has Paid.' : 'Not Paid.'
            }\n`)
        );
      return result.trim();
    }
    if (bookAuthor) {
      const foundBook = this.books.find((x) => x.bookAuthor == bookAuthor);
      if (foundBook) {
        return `${foundBook.bookName} == ${foundBook.bookAuthor} - ${
          foundBook.payed == true ? 'Has paid.' : 'Not Paid.'
        }`;
      } else {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }
    }
  }
}
// const library = new LibraryCollection(2);

// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2);

// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2);
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(5);
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());

const library = new LibraryCollection(2);

console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));

console.log(library.getStatistics('Miguel de Cervantes'));
