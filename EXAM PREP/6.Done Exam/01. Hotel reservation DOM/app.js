window.addEventListener('load', solve);

function solve() {
  const fnameInput = document.getElementById('first-name');
  const lnameInput = document.getElementById('last-name');
  const dateINInput = document.getElementById('date-in');
  const dateOutInput = document.getElementById('date-out');
  const peopleCountInput = document.getElementById('people-count');

  const reservInfo = document.querySelector('.info-list');
  const confirmList = document.querySelector('.confirm-list');

  const nextBTN = document.getElementById('next-btn');

  nextBTN.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      fnameInput.value == '' ||
      lnameInput.value == '' ||
      dateINInput.value == '' ||
      dateOutInput.value == '' ||
      peopleCountInput.value == '' ||
      new Date(dateINInput.value) >= new Date(dateOutInput.value)
    ) {
      return;
    }
    const createElement = (type, content, parent) => {
      const element = document.createElement(type);
      element.textContent = content;
      if (parent) {
        parent.appendChild(element);
      }
      return element;
    };
    const li = createElement('li');
    li.classList.add('reservation-content');
    const article = createElement('article');
    createElement(
      'h3',
      `Name: ${fnameInput.value} ${lnameInput.value}`,
      article
    );
    createElement('p', `From date: ${dateINInput.value}`, article);
    createElement('p', `To date: ${dateOutInput.value}`, article);
    createElement('p', `For ${peopleCountInput.value} people`, article);
    li.appendChild(article);
    let editBTN = createElement('button', 'Edit', li);
    editBTN.classList.add('edit-btn');
    let continueBTN = createElement('button', 'Continue', li);
    continueBTN.classList.add('continue-btn');
    reservInfo.appendChild(li);

    nextBTN.disabled = true;
    fnameInput.value = '';
    lnameInput.value = '';
    dateINInput.value = '';
    dateOutInput.value = '';
    peopleCountInput.value = '';

    editBTN.addEventListener('click', (e) => {
      let data = Array.from(e.target.parentNode.firstChild.childNodes);

      fnameInput.value = data[0].textContent.split(' ')[1].trim();
      lnameInput.value = data[0].textContent.split(' ')[2].trim();
      dateINInput.value = data[1].textContent.split(' ')[2].trim();
      dateOutInput.value = data[2].textContent.split(' ')[2].trim();
      peopleCountInput.value = data[3].textContent.split(' ')[1].trim();
      nextBTN.disabled = false;

      e.currentTarget.parentNode.remove();
    });
    continueBTN.addEventListener('click', (e) => {
      let currentData = e.currentTarget.parentElement;
      currentData.className = 'reservation-content';
      let btn1 = document.querySelector('.edit-btn');
      let btn2 = document.querySelector('.continue-btn');
      btn1.remove();
      btn2.remove();
      let confirm = createElement('button', 'Confirm', currentData);
      confirm.classList.add('confirm-btn');
      let cancel = createElement('button', 'Cancel', currentData);
      cancel.classList.add('cancel-btn');
      confirmList.appendChild(currentData);

      confirm.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        nextBTN.disabled = false;
        let verification = document.getElementById('verification');
        verification.classList.add('reservation-confirmed');
        verification.textContent = 'Confirmed.';
      });
      cancel.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        nextBTN.disabled = false;
        let verification = document.getElementById('verification');
        verification.classList.add('reservation-cancelled');
        verification.textContent = 'Cancelled.';
      });
    });
  });
}
