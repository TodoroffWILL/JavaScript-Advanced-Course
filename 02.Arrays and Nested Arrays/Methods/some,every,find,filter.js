const someArr = [10, 15, 20, 25, 30, 15, 35];
console.log(myArr.some((e) => e % 3 == 0));
// RETURNS TRUE OR FALSE IF IT HAS SOME OF THE THINGS YOU ASKED FOR.
const findArr = [10, 15, 20, 25, 30, 15, 35];
console.log(arr.find((e) => e % 3 == 0));
// Returns the First VALUE ! With the condition you passed to it ! If it doesn't find anything it returns UNDEFINED.
const filterArr = [10, 15, 20, 25, 30, 15, 35];
console.log(filterArr.filter((e) => e % 3 == 0));
// Returns ALL the matched VALUES ! With the condition you passed to it ! Creates new array.
