window.addEventListener('load', solve);

function solve() {
  const fNameInput = document.getElementById('first-name');
  const lNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('genderSelect');
  const descriptionInput = document.getElementById('task');

  const inProgressField = document.getElementById('in-progress');
  const counterField = document.getElementById('progress-count');

  const submitBTN = document.getElementById('form-btn');
  const clearBTN = document.getElementById('clear-btn');
  submitBTN.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      fNameInput.value &&
      lNameInput.value &&
      ageInput.value &&
      descriptionInput.value
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
      li.classList.add('each-line');
      const article = createElement('article');

      createElement('h4', `${fNameInput.value} ${lNameInput.value}`, article);
      createElement('p', `${genderInput.value}, ${ageInput.value}`, article);
      createElement(
        'p',
        `Dish description: ${descriptionInput.value}`,
        article
      );
      li.appendChild(article);
      let editBTN = createElement('button', 'Edit', li);
      editBTN.classList.add('edit-btn');
      let completeBTN = createElement('button', 'Mark as complete', li);
      completeBTN.classList.add('complete-btn');
      inProgressField.appendChild(li);

      counterField.textContent = Number(counterField.textContent) + 1;
      fNameInput.value = '';
      lNameInput.value = '';
      ageInput.value = '';
      genderInput.value = '';
      descriptionInput.value = '';

      editBTN.addEventListener('click', (e) => {
        let data = Array.from(e.target.parentNode.firstChild.childNodes);
        fNameInput.value = data[0].textContent.split(' ')[0].trim();
        lNameInput.value = data[0].textContent.split(' ')[1].trim();
        ageInput.value = data[1].textContent.split(', ')[1];
        genderInput.value = data[1].textContent.split(', ')[0];
        descriptionInput.value = data[2].textContent.slice(18);
        console.log(descriptionInput);
        counterField.textContent = Number(counterField.textContent) - 1;
        e.target.parentNode.remove();
      });
      completeBTN.addEventListener('click', (e) => {
        let currentTarget = e.target.parentNode;
        editBTN.remove();
        completeBTN.remove();
        counterField.textContent = Number(counterField.textContent) - 1;
        document.getElementById('finished').appendChild(currentTarget);
        console.log(currentTarget);
      });
      clearBTN.addEventListener('click', (e) => {
        document.getElementById('finished').innerHTML = '';
      });
    }
  });
}
