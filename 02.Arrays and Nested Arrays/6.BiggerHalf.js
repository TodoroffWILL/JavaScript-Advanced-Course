function biggerHalf(arr) {
  // sort the input
  arr.sort((a, b) => a - b);
  // determine half
  const start = Math.floor(arr.length / 2);
  // create new array with length half,starting from middle.
  const result = [];

  for (let i = start; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
biggerHalf([4, 7, 2, 5]);
