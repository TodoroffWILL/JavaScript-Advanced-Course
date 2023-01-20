const myArr = [10, 15, 20, 25, 30, 15, 35];
const arr = [40, 45, 50];

console.log(myArr.map((e) => e + 1)); // Returns new array 11,16,21,26 etc...
// HOW IT WORKS BACKSTAGE

function map(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = callback(arr[i], i, arr);
    result.push(current);
  }
  return result;
}
