function cookingByNumbers(...data) {
  let number = Number(data.shift());
  const commandsObj = {
    chop: (num) => num / 2,
    dice: (num) => Math.sqrt(num),
    spice: (num) => (num += 1),
    bake: (num) => num * 3,
    fillet: (num) => num - num * 0.2,
  };
  for (const commands of data) {
    number = commandsObj[commands](number); // Връща числото от Обекта с определена функция с зададен параметър с това число.
    console.log(number);
  }

  //   for (const command of params) {
  //     switch (command) {
  //       case "chop":
  //         number /= 2;
  //         console.log(number);
  //         break;
  //       case "dice":
  //         number = Math.sqrt(number);
  //         console.log(number);
  //         break;
  //       case "spice":
  //         number += 1;
  //         console.log(number);
  //         break;
  //       case "bake":
  //         number *= 3;
  //         console.log(number);
  //         break;
  //       case "fillet":
  //         number = number - number * 0.2;
  //         console.log(number);
  //         break;
  //     }
  //   }
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
// · chop - divide the number by two
// · dice - square root of a number
// · spice - add 1 to the number
// · bake - multiply number by 3
// · fillet - subtract 20% from the number
