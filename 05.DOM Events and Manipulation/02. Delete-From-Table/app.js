function deleteByEmail() {
  const tdElementEmail = document.querySelectorAll('tr td:nth-of-type(2)');
  const inputElement = document.querySelector('input[name="email"]').value;
  // Get element by his attribute !!!

  let emailElements = Array.from(tdElementEmail);
  let targetElement = emailElements.find((x) => x.textContent == inputElement);

  if (targetElement) {
    targetElement.parentNode.remove();
    document.getElementById('result').textContent = 'Deleted.';
  } else {
    document.getElementById('result').textContent = 'Not found.';
  }
}
