function townPopulation(input) {
  const result = {};

  for (const el of input) {
    const tokens = el.split(" <-> ");
    const name = tokens[0];
    const population = Number(tokens[1]);

    if (name in result) {
      result[name] += population;
    } else {
      result[name] = population;
    }
  }

  for (let name in result) {
    console.log(`${name} : ${result[name]}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
