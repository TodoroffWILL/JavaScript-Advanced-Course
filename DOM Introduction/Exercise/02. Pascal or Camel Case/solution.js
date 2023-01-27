function solve() {
  const input = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  const resultEl = document.getElementById("result");

  const toPascal = (text) =>
    text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join("");
  
  const toCamelCase = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.substring(1);
  };

  if (convention == "Pascal Case") {
    resultEl.textContent = toPascal(input);
  } else if (convention == "Camel Case") {
    resultEl.textContent = toCamelCase(input);
  } else {
    resultEl.textContent = "Error!";
  }
}
