function sortArr2Criteria(array) {
  array.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(array.join("\n"));
}
sortArr2Criteria(["alpha", "beta", "gamma"]);
