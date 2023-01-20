function extractIncreasingSubset(numbers) {
  // let biggestNumber = numbers.shift()
  // const finalResult = [biggestNumber];

  // for (const num of numbers) {
  //     if (num >= biggestNumber){
  //         biggestNumber = num;
  //         finalResult.push(num);
  //     }
  // }
  // return finalResult;
  let finalResult = [];
  let biggestNumber = numbers[0];
  finalResult = numbers.reduce((acc, currEl) => {
    if (biggestNumber <= currEl) {
      acc.push(currEl);
      biggestNumber = currEl;
    }
    return acc;
  }, []);
  console.log(finalResult);
}
extractIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
