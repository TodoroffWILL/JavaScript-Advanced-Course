function focused() {
  const inputElements = document.querySelectorAll('input');

  for (const input of inputElements) {
    input.addEventListener('focus', (e) => {
      input.parentNode.classList = 'focused';
    });
    input.addEventListener('blur', (e) => {
      e.target.parentNode.classList.remove('focused');
    });
  }
}
