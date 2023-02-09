function sum3(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
//This is how it works, "a"" returning "b" which returning "c" and because its arrow function 'this' refeers to the previous one.
const arrowSum = (a) => (b) => (c) => a + b + c;

console.log(arrowSum(5)(6)(8));
console.log(sum3(5)(6)(8));

let sum5 = sum3(5);
let sum5and6 = sum5(6);
let totalSum = sum5and6(8);
console.log(totalSum);
