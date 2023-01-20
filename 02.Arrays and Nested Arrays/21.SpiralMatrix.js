function spiralMatrix(row, column) {
  let num = 1;
  let finalArr = [];

  for (let i = 0; i < row; i++) {
    let currArr = [];
    currArr.length = column;
    finalArr.push(currArr);
  }
  let startRowIndex = 0;
  let startColIndex = 0;

  while (startRowIndex < row && startColIndex < column) {
    for (let i = startColIndex; i < column; ++i) {
      finalArr[startRowIndex][i] = num++;
    }
    startRowIndex++;
    for (let i = startRowIndex; i < row; ++i) {
      finalArr[i][column - 1] = num++;
    }
    column--;
    if (startRowIndex < row) {
      for (let i = column - 1; i >= startColIndex; --i) {
        finalArr[row - 1][i] = num++;
      }
      row--;
    }
    if (startColIndex < column) {
      for (let i = row - 1; i >= startRowIndex; --i) {
        finalArr[i][startColIndex] = num++;
      }
      startColIndex++;
    }
  }

  finalArr.forEach((row) => console.log(row.join(" ")));
}
spiralMatrix(3, 3);
