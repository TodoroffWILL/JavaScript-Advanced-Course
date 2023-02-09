function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  const rowsElements = Array.from(document.querySelectorAll('tbody tr'));
  const inputElement = document.getElementById('searchField');
  function onClick() {
    for (const row of rowsElements) {
      if (
        inputElement.value !== '' &&
        row.textContent.includes(inputElement.value)
      ) {
        row.classList.add('select');
      } else {
        row.classList.remove('select');
      }
    }
  }
}
