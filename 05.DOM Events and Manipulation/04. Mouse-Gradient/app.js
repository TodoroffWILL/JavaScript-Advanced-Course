function attachGradientEvents() {
  const hoverElement = document.getElementById('gradient');
  const resultElement = document.getElementById('result');

  const hoverMouseOverHandler = (event) => {
    let percent = Math.floor((event.offsetX / event.target.clientWidth) * 100);
    resultElement.textContent = `${percent}%`;
    hoverElement.addEventListener('mouseout', () => {
      resultElement.textContent = '';
    });
  };

  hoverElement.addEventListener('mousemove', hoverMouseOverHandler);
}
