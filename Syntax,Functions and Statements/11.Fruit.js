function buyingFruits(fruit, grams, pricePerKg) {
  let gramsToKG = grams / 1000;
  let neededMoney = gramsToKG * pricePerKg;

  console.log(
    `I need $${neededMoney.toFixed(2)} to buy ${gramsToKG.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
buyingFruits("orange", 2500, 1.8);
buyingFruits('apple', 1563, 2.35)
