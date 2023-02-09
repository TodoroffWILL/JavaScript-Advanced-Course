function notify(message) {
  const divNotificationEl = document.getElementById('notification');

  divNotificationEl.textContent = message;
  divNotificationEl.style.display = 'block';

  divNotificationEl.addEventListener('click', () => {
    divNotificationEl.style.display = 'none';
  });
}
