function addItem() {
  const itemTextElement = document.getElementById('newItemText').value;
  const valueTextElement = document.getElementById('newItemValue').value;
  const selectMenu = document.getElementById('menu');

  const option = document.createElement('option');
  option.textContent = itemTextElement;
  option.value = valueTextElement;

  if (itemTextElement !== '' && valueTextElement !== '') {
    selectMenu.appendChild(option);
  }
  document.getElementById('newItemText').value = '';
  document.getElementById('newItemValue').value = '';
}
