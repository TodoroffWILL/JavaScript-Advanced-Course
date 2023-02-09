function solve() {
  const inputElement = document.getElementById('text').value;
  const currentCase = document.getElementById('naming-convention').value;

  let result = '';

  if (currentCase == 'Camel Case') {
    // this is an example
    for (let i = 0; i < inputElement.length; i++) {
      if (inputElement[i] === ' ') {
        result += inputElement[i + 1].toUpperCase();
        i++;
      } else {
        result += inputElement[i].toLowerCase();
      }
    }
  } else if (currentCase == 'Pascal Case') {
    result += inputElement[0].toUpperCase();

    for (let i = 1; i < inputElement.length; i++) {
      if (inputElement[i] == ' ') {
        result += inputElement[i + 1].toUpperCase();
        i++;
      } else {
        result += inputElement[i].toLowerCase();
      }
    }
  } else {
    result = 'Error!';
  }

  document.querySelector('.result-container #result').textContent = result;
}
