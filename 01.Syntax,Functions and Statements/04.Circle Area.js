function circle(radius) {
  let result = 0;
  if (typeof radius == "number") {
    result = radius ** 2 * Math.PI;
    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof radius}.`
    );
  }
}
circle(5);
