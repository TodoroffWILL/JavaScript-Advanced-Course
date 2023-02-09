function colorize() {
  const tableElements = document.querySelectorAll('table tr');

  for (let i = 1; i < tableElements.length; i++) {
    if (i % 2 == 1) {
      tableElements[i].style.background = 'teal';
    } else {
      tableElements[i].style.background = 'red';
    }
  }
}
