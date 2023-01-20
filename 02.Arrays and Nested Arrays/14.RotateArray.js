function rotateArr(arr, numb) {
  for (let i = 0; i < numb; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(" "));
}
rotateArr(["1", "2", "3", "4"], 2);
