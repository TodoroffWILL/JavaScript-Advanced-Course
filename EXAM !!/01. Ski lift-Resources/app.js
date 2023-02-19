window.addEventListener('load', solve);

function solve() {
  const fNameInput = document.getElementById('first-name');
  const lnameInput = document.getElementById('last-name');
  const guestCountInput = document.getElementById('people-count');
  const fromDateInput = document.getElementById('from-date');
  const daysInput = document.getElementById('days-count');

  const previewInfo = document.querySelector('.ticket-info-list');
  const confirmTicketInfo = document.querySelector('.confirm-ticket');

  const nextStepBTN = document.getElementById('next-btn');

  nextStepBTN.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      fNameInput.value &&
      lnameInput.value &&
      guestCountInput.value &&
      fromDateInput.value &&
      daysInput.value
    ) {
      const createElement = (type, content, parent) => {
        const element = document.createElement(type);
        element.textContent = content;
        if (parent) {
          parent.appendChild(element);
        }
        return element;
      };
      const li = createElement('li');
      li.classList.add('ticket');
      const article = createElement('article');
      createElement(
        'h3',
        `Name: ${fNameInput.value} ${lnameInput.value}`,
        article
      );
      createElement('p', `From date: ${fromDateInput.value}`, article);
      createElement('p', `For ${daysInput.value} days`, article);
      createElement('p', `For ${guestCountInput.value} people`, article);
      li.appendChild(article);
      let editBTN = createElement('button', 'Edit', li);
      editBTN.classList.add('edit-btn');
      let continueBTN = createElement('button', 'Continue', li);
      continueBTN.classList.add('continue-btn');
      previewInfo.appendChild(li);
      nextStepBTN.disabled = true;
      fNameInput.value = '';
      lnameInput.value = '';
      guestCountInput.value = '';
      fromDateInput.value = '';
      daysInput.value = '';

      editBTN.addEventListener('click', (e) => {
        let data = Array.from(e.target.parentNode.firstChild.childNodes);
        fNameInput.value = data[0].textContent.split(' ')[1].trim();
        lnameInput.value = data[0].textContent.split(' ')[2].trim();
        fromDateInput.value = data[1].textContent.split(' ')[2];
        daysInput.value = data[2].textContent.split(' ')[1];
        guestCountInput.value = data[3].textContent.split(' ')[1];

        nextStepBTN.disabled = false;
        e.target.parentNode.remove();
      });
      continueBTN.addEventListener('click', (e) => {
        let currentData = e.target.parentNode;
        editBTN.remove();
        continueBTN.remove();
        let confirmBTN = createElement('button', 'Confirm', currentData);
        confirmBTN.classList.add('confirm-btn');
        let cancelBTN = createElement('button', 'cancel', currentData);
        cancelBTN.classList.add('cancel-btn');
        confirmTicketInfo.appendChild(currentData);

        cancelBTN.addEventListener('click', (e) => {
          e.target.parentNode.remove();
          nextStepBTN.disabled = false;
        });

        confirmBTN.addEventListener('click', (e) => {
          document.getElementById('main').remove();
          let body = document.querySelector('body');
          let h1 = createElement('h1', 'Thank you, have a nice day!', body);
          h1.id = 'thank-you';
          let reloadBTN = createElement('button', 'Back', body);
          reloadBTN.id = 'back-btn';
          reloadBTN.addEventListener('click', (e) => {
            location.reload();
          });
        });
      });
    }
  });
}
