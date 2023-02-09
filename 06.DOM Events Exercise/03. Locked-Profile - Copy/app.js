function lockedProfile() {
  Array.from(document.querySelectorAll('.profile button')).forEach((button) => {
    button.addEventListener('click', onClick);
  });

  function onClick(e) {
    let isActive = e.target.parentNode.querySelector(
      'input[value="unlock"]'
    ).checked;
    if (isActive) {
      let userInfoClass = Array.from(
        e.target.parentNode.querySelectorAll('div')
      ).find((x) => x.id.includes('HiddenFields'));
      if (e.target.textContent === 'Show more') {
        e.target.textContent = 'Hide it';
        userInfoClass.style.display = 'block';
      } else {
        e.target.textContent = 'Show more';
        userInfoClass.style.display = 'none';
      }
    }
  }
}
