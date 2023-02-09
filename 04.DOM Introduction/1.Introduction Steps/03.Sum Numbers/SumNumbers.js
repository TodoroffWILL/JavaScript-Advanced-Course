function calc() {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');

  const result = Number(num1.value) + Number(num2.value);

  document.getElementById('sum').value = result;

  num1.value = '';
  num2.value = '';
  // TODO: sum = num1 + num2
}
