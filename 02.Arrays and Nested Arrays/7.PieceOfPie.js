function pieceOfPie(arrOfPies, pieStart, pieFinish) {
  const firstIndex = arrOfPies.indexOf(pieStart);
  const lastIndex = arrOfPies.indexOf(pieFinish);
  return arrOfPies.slice(firstIndex, lastIndex + 1);
}
pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
