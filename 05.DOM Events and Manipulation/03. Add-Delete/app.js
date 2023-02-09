function addItem() {
  const ulElement = document.getElementById('items');
  const inputElement = document.querySelector('#newItemText');

  const newLiElement = document.createElement('li');
  newLiElement.textContent = inputElement.value;
  inputElement.value = '';

  const linkElement = document.createElement('a');
  linkElement.href = '#';
  linkElement.textContent = '[Delete]';
  linkElement.addEventListener('click', (e) => {
    e.currentTarget.parentNode.remove();
  });

  newLiElement.appendChild(linkElement);
  ulElement.appendChild(newLiElement);
}
