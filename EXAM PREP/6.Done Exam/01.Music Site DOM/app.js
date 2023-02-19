window.addEventListener('load', solve);

function solve() {
  const genreInput = document.getElementById('genre');
  const nameSongInput = document.getElementById('name');
  const authorInput = document.getElementById('author');
  const dateOfCreationInput = document.getElementById('date');

  const collectionOfSongsDiv = document.querySelector('.all-hits-container');
  const savedDivSongs = document.querySelector('.saved-container');
  const addBTN = document.getElementById('add-btn');

  addBTN.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      genreInput.value &&
      nameSongInput.value &&
      authorInput.value &&
      dateOfCreationInput.value
    ) {
      const createElement = (type, content, parent) => {
        const element = document.createElement(type);
        element.textContent = content;
        if (parent) {
          parent.appendChild(element);
        }
        return element;
      };
      let hitsDiv = createElement('div');
      hitsDiv.classList.add('hits-info');
      let img = document.createElement('img');
      img.src = './static/img/img.png';
      hitsDiv.appendChild(img);
      createElement('h2', `Genre:${genreInput.value}`, hitsDiv);
      createElement('h2', `Name:${nameSongInput.value}`, hitsDiv);
      createElement('h2', `Author:${authorInput.value}`, hitsDiv);
      createElement('h3', `Date:${dateOfCreationInput.value}`, hitsDiv);

      let saveBTN = createElement('button', 'Save song', hitsDiv);
      saveBTN.classList.add('save-btn');
      let likeBTN = createElement('button', 'Like song', hitsDiv);
      likeBTN.classList.add('like-btn');
      let deleteBTN = createElement('button', 'Delete', hitsDiv);
      deleteBTN.classList.add('delete-btn');
      collectionOfSongsDiv.appendChild(hitsDiv);

      genreInput.value = '';
      nameSongInput.value = '';
      authorInput.value = '';
      dateOfCreationInput.value = '';

      likeBTN.addEventListener('click', (e) => {
        e.target.disabled = true;
        let totalLikes = document
          .querySelector('.likes p')
          .textContent.slice(12);
        totalLikes = Number(totalLikes);
        totalLikes++;
        document.querySelector(
          '.likes p'
        ).textContent = `Total Likes: ${totalLikes}`;
      });

      saveBTN.addEventListener('click', (e) => {
        let currentSong = e.currentTarget.parentNode;
        
        let likebtns = document.querySelector('.like-btn');
        let savebtns = document.querySelector('.save-btn');
        likebtns.remove();
        savebtns.remove();
        savedDivSongs.appendChild(currentSong);
      });
      deleteBTN.addEventListener('click', (e) => {
        e.target.parentElement.remove();
      });
    }
  });
}
