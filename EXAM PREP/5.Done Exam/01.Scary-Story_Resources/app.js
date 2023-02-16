window.addEventListener('load', solve);

function solve() {
  const fNameInput = document.getElementById('first-name');
  const lNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const titleInput = document.getElementById('story-title');
  const genreInput = document.getElementById('genre');
  const storyInput = document.getElementById('story');

  const ulOutput = document.getElementById('preview-list');

  const publishBTN = document.getElementById('form-btn');

  publishBTN.addEventListener('click', (e) => {
    if (
      fNameInput.value &&
      lNameInput.value &&
      ageInput.value &&
      titleInput.value &&
      storyInput.value
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
      li.classList.add('story-info');
      const article = createElement('article');
      createElement(
        'h4',
        `Name: ${fNameInput.value} ${lNameInput.value}`,
        article
      );
      createElement('p', `Age: ${ageInput.value}`, article);
      createElement('p', `Title: ${titleInput.value}`, article);
      createElement('p', `Genre: ${genreInput.value}`, article);
      createElement('p', `${storyInput.value}`, article);
      li.appendChild(article);
      let saveBTN = createElement('button', 'Save Story', li);
      saveBTN.classList.add('save-btn');
      let editBTN = createElement('button', 'Edit Story', li);
      editBTN.classList.add('edit-btn');
      let deleteBTN = createElement('button', 'Delete Story', li);
      deleteBTN.classList.add('delete-btn');
      ulOutput.appendChild(li);

      fNameInput.value = '';
      lNameInput.value = '';
      ageInput.value = '';
      storyInput.value = '';
      titleInput.value = '';
      publishBTN.setAttribute('disabled', true);

      editBTN.addEventListener('click', (e) => {
        let data = Array.from(document.querySelector('article').childNodes);
        fNameInput.value = data[0].textContent.slice().split(' ')[1].trim();
        lNameInput.value = data[0].textContent.slice().split(' ')[2].trim();
        ageInput.value = data[1].textContent.slice().split(' ')[1].trim();
        titleInput.value = data[2].textContent.slice(6).trim();
        genreInput.value = data[3].textContent.slice().split(' ')[1].trim();
        storyInput.value = data[4].textContent;
        e.target.parentElement.remove();
        publishBTN.disabled = false;
      });
      saveBTN.addEventListener('click', (e) => {
        document.getElementById('main').innerHTML = '';
        let result = document.createElement('h1');
        result.textContent = 'Your scary story is saved!';
        document.getElementById('main').appendChild(result);
      });
      deleteBTN.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        publishBTN.disabled = false;
      });
    }
  });
}
