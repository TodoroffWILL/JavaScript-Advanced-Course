const myArr = [10, 15, 20, 25, 30, 15, 35];


console.log(myArr.reduce(acc,curr,0));
console.log(reduce(myArr, sum, 0));
// HOW IT WORKS BACKSTAGE!
function reduce(arr, reducer, accumulator) {
  for (const element of arr) {
    console.log(
      `Accumulator:${accumulator} Element:${element} -> ${reducer(
        accumulator,
        element
      )}`
    );
    accumulator = reducer(accumulator, element);
  }
  return accumulator;
}
function sum(accumulator, element) {
  return accumulator + element;
}
