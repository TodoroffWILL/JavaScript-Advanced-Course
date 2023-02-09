function juiceFlavors(data) {
  let factory = {};
  let bottles = {};

  for (const line of data) {
    let [juice, quantity] = line.split(' => ');
    quantity = Number(quantity);
    if (!factory.hasOwnProperty(juice)) {
      factory[juice] = quantity;
    } else {
      factory[juice] += quantity;
    }

    if (factory[juice] >= 1000) {
      if (!bottles.hasOwnProperty(juice)) {
        bottles[juice];
      } else {
        bottles[juice]++;
      }
    }

    console.log(factory[juice]);
  }
  console.log(bottles);
}
juiceFlavors([
  'Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549',
]);
// juiceFlavors([
//   'Kiwi => 234',
//   'Pear => 2345',
//   'Watermelon => 3456',
//   'Kiwi => 4567',
//   'Pear => 5678',
//   'Watermelon => 6789',
// ]);
