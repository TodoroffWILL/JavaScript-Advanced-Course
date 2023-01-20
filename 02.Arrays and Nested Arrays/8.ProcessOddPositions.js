function oddPositions(arr) {
  const filtered = arr
    .filter((x, i) => i % 2 != 0)
    .map((x) => x * 2)
    .reverse()
    .join(" ");
  console.log(filtered);
}
oddPositions([10, 15, 20, 25]);
