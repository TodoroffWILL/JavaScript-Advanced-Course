const myArr = [10, 15, 20, 25, 30, 15, 35];
const arr = [40, 45, 50];

myArr.forEach((e,i,a) => console.log(e,i,a));
// HOW IT WORKS BACKSTAGE
forEach(myArr, (e) => console.log(e));
// It can take upto 3 elements- value,index,array
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
