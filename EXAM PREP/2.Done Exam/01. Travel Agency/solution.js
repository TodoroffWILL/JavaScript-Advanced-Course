window.addEventListener('load', solution);

function solution() {
  const fullNameEl = document.getElementById('fname');
  const emailEl = document.getElementById('email');
  const phoneEl = document.getElementById('phone');
  const addressEl = document.getElementById('address');
  const postCodeEl = document.getElementById('code');

  const submitBtnEl = document.getElementById('submitBTN');
  submitBtnEl.disabled = false;
  const editBtnEl = document.getElementById('editBTN');
  editBtnEl.disabled = true;
  const continueBtnEl = document.getElementById('continueBTN');
  continueBtnEl.disabled = true;
  let fNameLI = document.createElement('li');
  let emailLI = document.createElement('li');
  let phoneLI = document.createElement('li');
  let addressLI = document.createElement('li');
  let postCodeLI = document.createElement('li');

  const ulEl = document.getElementById('infoPreview');

  submitBtnEl.addEventListener('click', (e) => {
    if (fullNameEl.value && emailEl.value !== '') {
      ulEl.appendChild(fNameLI);
      fNameLI.textContent = `Full Name: ${fullNameEl.value}`;
      ulEl.appendChild(emailLI);
      emailLI.textContent = `Email: ${emailEl.value}`;
      ulEl.appendChild(phoneLI);
      phoneLI.textContent = `Phone Number: ${phoneEl.value}`;
      ulEl.appendChild(addressLI);
      addressLI.textContent = `Address: ${addressEl.value}`;
      ulEl.appendChild(postCodeLI);
      postCodeLI.textContent = `Postral Code: ${postCodeEl.value}`;

      submitBtnEl.disabled = true;
      editBtnEl.disabled = false;
      continueBtnEl.disabled = false;
      fullNameEl.value = '';
      emailEl.value = '';
      phoneEl.value = '';
      addressEl.value = '';
      postCodeEl.value = '';
    }
  });

  editBtnEl.addEventListener('click', (e) => {
    fullNameEl.value = fNameLI.textContent.split(':')[1];
    emailEl.value = emailLI.textContent.split(':')[1];
    phoneEl.value = phoneLI.textContent.split(':')[1];
    addressEl.value = addressLI.textContent.split(':')[1];
    postCodeEl.value = postCodeLI.textContent.split(':')[1];

    editBtnEl.disabled = true;
    continueBtnEl.disabled = true;
    submitBtnEl.disabled = false;
    while (ulEl.firstChild) {
      ulEl.removeChild(ulEl.firstChild);
    }
  });
  const blockDivEl = document.getElementById('block');
  continueBtnEl.addEventListener('click', (e) => {
    blockDivEl.innerHTML = '';

    let finish = document.createElement('h3');
    finish.textContent = 'Thank you for your reservation!';
    blockDivEl.appendChild(finish);
  });
}
