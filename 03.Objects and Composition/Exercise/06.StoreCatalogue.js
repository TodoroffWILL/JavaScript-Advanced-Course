function cataloge(input) {
  let cataloge = {};

  for (const el of input) {
    let [product, price] = el.split(" : ");
    let firstLetter = product[0];
    if (!cataloge.hasOwnProperty(firstLetter)) {
      cataloge[firstLetter] = {};
    }
    cataloge[firstLetter][product] = price;
  }
  let sorted = Object.keys(cataloge).sort((a, b) => a.localeCompare(b));
  for (const key of sorted) {
    console.log(key);
    let sortedProducts = Object.keys(cataloge[key]).sort((a, b) =>
      a.localeCompare(b)
    );
    for (const product of sortedProducts) {
      console.log(`  ${product}: ${cataloge[key][product]}`);
    }
  }
}
cataloge([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
