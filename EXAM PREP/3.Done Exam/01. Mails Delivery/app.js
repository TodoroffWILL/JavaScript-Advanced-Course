function solve() {
  const nameEl = document.getElementById('recipientName');
  const titleEl = document.getElementById('title');
  const messageEl = document.getElementById('message');
  const list = document.getElementById('list');
  const deletedUL = document.querySelector('.delete-list');
  const sendList = document.querySelector('.sent-list');

  document.getElementById('add').addEventListener('click', createMail);
  document.getElementById('reset').addEventListener('click', onReset);

  function createMail(e) {
    e.preventDefault();
    const name = nameEl.value;
    const title = titleEl.value;
    const message = messageEl.value;
    if (name == '' || title == '' || message == '') {
      return;
    }
    const element = document.createElement('li');
    element.innerHTML = `<h4>Title: ${title}</h4>
      <h4>Recipient Name: ${name}</h4>
      <span>${message}</span>
      <div id="list-action">
          <button type="submit" id="send">Send</button>
          <button type="submit" id="delete">Delete</button>
      </div>`;
    // TO DO:
    // - add event listener to Send button
    // - add event listener to Delete Button
    list.appendChild(element);
    resetMail();
    element.querySelector('#send').addEventListener('click', sendMail);
    function sendMail() {
      const sentMailElement = document.createElement('li');
      sentMailElement.innerHTML = `<span>To: ${name}</span>
          <span>Title: ${title}</span>
          <div class="btn">
              <button type="submit" class="delete">Delete</button>
          </div>`;
      sendList.appendChild(sentMailElement);
      element.remove();
      sentMailElement.querySelector('.delete').addEventListener('click', () => {
        const deleteMailElement = document.createElement('li');
        deleteMailElement.innerHTML = `<span>To: ${name}</span>
                <span>Title: ${title}</span>`;
        deletedUL.appendChild(deleteMailElement);
        sentMailElement.remove();
      });
    }
    element.querySelector('#delete').addEventListener('click', deleteMail);
    function deleteMail() {
      const deleteMailElement = document.createElement('li');
      deleteMailElement.innerHTML = `<span>To: ${name}</span>
          <span>Title: ${title}</span>`;
      deletedUL.appendChild(deleteMailElement);
      element.remove();
    }
  }
  function onReset(e) {
    e.preventDefault();
    resetMail();
  }
  function resetMail() {
    nameEl.value = '';
    messageEl.value = '';
    titleEl.value = '';
  }
}
solve();

// ON FORMS we use e.preventDefault();
