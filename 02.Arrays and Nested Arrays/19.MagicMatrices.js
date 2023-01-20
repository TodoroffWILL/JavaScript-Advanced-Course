function magicMatrix(matrix) {
  let sumRows = 0;
  let sumColumns = 0;

  for (let i = 0; i < matrix.length; i++) {
    let currentArr = matrix[i].join("");
    for (let j = 0; j < currentArr.length; j++) {
      sumRows += Number(currentArr[j]);
      sumColumns += Number(currentArr[0]);
    }
  }
  if (sumRows === sumColumns) {
    console.log(true);
  } else {
    console.log(false);
  }
}
magicMatrix([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
