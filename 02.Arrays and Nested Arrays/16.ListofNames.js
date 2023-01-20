function sortListOfNames(arrToSort) {
  arrToSort
    .sort((a, b) => a.localeCompare(b))
    .forEach((el, i) => {
      console.log(`${i + 1}.${el}`);
    });
}
sortListOfNames(["John", "Bob", "Christina", "Ema"]);
