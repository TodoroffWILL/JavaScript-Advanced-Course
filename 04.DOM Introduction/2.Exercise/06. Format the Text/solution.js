function solve() {
  const userInputElement = document.querySelector('#exercise #input').value;
  const outputElement = document.getElementById('output');

  const inputToArr = userInputElement
    .split('.')
    .filter((sentence) => sentence !== '');

  while (inputToArr.length > 0) {
    let text = inputToArr.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    outputElement.appendChild(p);
  }
}
