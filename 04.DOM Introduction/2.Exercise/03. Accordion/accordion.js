function toggle() {
  const buttonElement = document.querySelector('#accordion .head .button');
  const textElement = document.getElementById('extra');

  if (buttonElement.textContent == 'More') {
    buttonElement.textContent = 'Less';
    textElement.style.display = 'block';
  } else {
    buttonElement.textContent = 'More';
    textElement.style.display = 'none';
  }
}
