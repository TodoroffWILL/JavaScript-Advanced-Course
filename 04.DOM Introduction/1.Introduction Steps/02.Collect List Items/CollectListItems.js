function extractText() {
  const ulElements = document.querySelectorAll('#items li');
  const textElement = document.getElementById('result');

  for (const el of ulElements) {
    textElement.value += `${el.textContent}\n`;
  }
}
