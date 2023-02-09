function validate() {
  const inputElement = document.getElementById('email');

  inputElement.addEventListener('change', (e) => {
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

    if (pattern.test(e.target.value)) {
      e.target.classList.remove('error');
    } else {
      e.target.classList.add('error');
    }
  });
}
