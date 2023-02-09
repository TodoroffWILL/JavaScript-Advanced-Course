function create(input) {
  const divResult = document.getElementById('content');

  for (const word of input) {
    let newDiv = document.createElement('div');
    let paragraph = document.createElement('p');
    paragraph.textContent = word;
    paragraph.setAttribute('style', 'display:none');
    newDiv.appendChild(paragraph);
    divResult.appendChild(newDiv);
    
    newDiv.addEventListener('click', (e) => {
       e.currentTarget.childNodes[0].removeAttribute('style');
      });
   }
}
