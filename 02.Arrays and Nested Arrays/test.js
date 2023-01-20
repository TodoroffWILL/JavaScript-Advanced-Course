const myArr = [10, 15, 20, 25, 30, 35];

const [a,b,...rest] = myArr; //Create 2 variables a,b with the first 2 indexes. It DOESNT mutate the ARRAY.
// The ...rest means the rest of the elements of the arr in a NEW arr named REST.
console.log(myArr[getIndex()]);

function getIndex() { // We can give an index as function that returns integer !
  return 2;
}
const yourArr = [10, 15, 20, 25, 30, 35];
console.log(yourArr.splice(3,0,22,23));
// On 3th index Delete 0 elements and add on the 3th index - 22,23 and push the rest 


