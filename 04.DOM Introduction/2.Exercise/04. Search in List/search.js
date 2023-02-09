function search() {
  const liElements = Array.from(document.querySelectorAll('#towns li'));
  const inputElement = document.getElementById('searchText').value;
  const result = document.getElementById('result');

  let counterMatches = 0;

  for (const town of liElements) {
    if (town.textContent.includes(inputElement)) {
      town.style.fontWeight = 'bold';
      town.style.textDecoration = 'underline';
      counterMatches++;
    } else {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
    }
  }
  result.textContent = `${counterMatches} matches found`;
}
