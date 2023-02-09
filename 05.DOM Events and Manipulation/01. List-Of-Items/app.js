function addItem() {
  const ulElement = document.getElementById('items');
  const inputElement = document.getElementById('newItemText');

  const newElement = document.createElement('li');
  newElement.textContent = inputElement.value;

  ulElement.appendChild(newElement);
}
