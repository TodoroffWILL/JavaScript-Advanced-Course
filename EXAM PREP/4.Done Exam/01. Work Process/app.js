function solve() {
  // Inputs
  const fNameInput = document.getElementById('fname');
  const lNameInput = document.getElementById('lname');
  const emailInput = document.getElementById('email');
  const birthInput = document.getElementById('birth');
  const positionInput = document.getElementById('position');
  const salaryInput = document.getElementById('salary');
  // BodyOutput
  const tBodyOutput = document.getElementById('tbody');
  const sumOutput = document.getElementById('sum');

  const hireBtnElement = document.getElementById('add-worker');

  hireBtnElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      fNameInput.value &&
      lNameInput.value &&
      emailInput.value &&
      birthInput.value &&
      positionInput.value &&
      salaryInput.value
    ) {
      const createElement = (type, content, parent) => {
        const element = document.createElement(type);
        element.textContent = content;
        if (parent) {
          parent.appendChild(element);
        }
        return element;
      };
      const tr = createElement('tr');
      createElement('td', `${fNameInput.value}`, tr);
      createElement('td', `${lNameInput.value}`, tr);
      createElement('td', `${emailInput.value}`, tr);
      createElement('td', `${birthInput.value}`, tr);
      createElement('td', `${positionInput.value}`, tr);
      createElement('td', `${salaryInput.value}`, tr);
      const td = createElement('td', '', tr);
      let fireBtn = createElement('button', 'Fired', td);
      fireBtn.classList.add('fired');
      let editBtn = createElement('button', 'Edit', td);
      editBtn.classList.add('edit');
      tBodyOutput.appendChild(tr);
      let currentSalary = Number(salaryInput.value);

      sumOutput.textContent = (
        Number(sumOutput.textContent) + currentSalary
      ).toFixed(2);
      fNameInput.value = '';
      lNameInput.value = '';
      emailInput.value = '';
      birthInput.value = '';
      positionInput.value = '';
      salaryInput.value = '';

      editBtn.addEventListener('click', (e) => {
        let currentData = Array.from(document.querySelectorAll('#tbody tr td'));
        fNameInput.value = currentData[0].textContent;
        lNameInput.value = currentData[1].textContent;
        emailInput.value = currentData[2].textContent;
        birthInput.value = currentData[3].textContent;
        positionInput.value = currentData[4].textContent;
        salaryInput.value = Number(currentData[5].textContent);

        sumOutput.textContent = (
          Number(sumOutput.textContent) - currentSalary
        ).toFixed(2);
        e.target.parentElement.parentElement.remove();
      });
      fireBtn.addEventListener('click', (e) => {
        sumOutput.textContent = (
          Number(sumOutput.textContent) - currentSalary
        ).toFixed(2);
        e.target.parentElement.parentElement.remove();
      });
    }
  });
}
solve();


