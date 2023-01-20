function printEveryNofArr(arr, numb) {
  //   const newArr = [];

  //   for (let i = 0; i < arr.length; i += numb) {
  //     newArr.push(arr[i]);
  //   }
  return arr.filter((_, index) => index % numb == 0);
}
printEveryNofArr(["5", "20", "31", "4", "20"], 2);
