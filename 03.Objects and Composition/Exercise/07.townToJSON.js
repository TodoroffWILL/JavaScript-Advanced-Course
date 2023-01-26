function toJSON(input) {
  const towns = [];

  for (let i = 1; i < input.length; i++) {
    const tokens = input[i].split(/\s*\|\s*/g);
    const town = tokens[1];
    const latitude = Number(tokens[2]).toFixed(2);
    const longitude = Number(tokens[3]).toFixed(2);

    const currentObj = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };
    towns.push(currentObj);
  }
  console.log(JSON.stringify(towns));
}
toJSON([
  "| Town | Latitude | Longtitude |",

  "| Sofia | 42.696552 | 23.32601 |",

  "| Beijing | 39.913818 | 116.363625 |",
]);
