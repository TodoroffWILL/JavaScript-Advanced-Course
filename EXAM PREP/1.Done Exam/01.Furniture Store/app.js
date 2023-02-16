window.addEventListener('load', solve);

function solve() {
  const addBtnElement = document.getElementById('add');

  const modelElement = document.getElementById('model');
  const yearElement = document.getElementById('year');
  const descriptionElement = document.getElementById('description');
  const priceElement = document.getElementById('price');

  const tBodyElement = document.getElementById('furniture-list');

  addBtnElement.addEventListener('click', (e) => {
    e.preventDefault();
    let year = Number(yearElement.value);
    let price = Number(priceElement.value);
    if (!modelElement.value || !descriptionElement.value) {
      return;
    }
    if (year <= 0 || price <= 0) {
      return;
    }
    let rowElement = document.createElement('tr');
    rowElement.classList.add('info');
    let modelTDElement = document.createElement('td');
    let priceCellElement = document.createElement('td');
    let actionsCellElement = document.createElement('td');

    modelTDElement.textContent = modelElement.value;
    priceCellElement.textContent = price.toFixed(2);

    let buttonInfo = document.createElement('button');
    buttonInfo.classList.add('moreBtn');
    buttonInfo.textContent = 'More Info';
    let buyBtn = document.createElement('button');
    buyBtn.classList.add('buyBtn');
    buyBtn.textContent = 'Buy it';
    actionsCellElement.appendChild(buttonInfo);
    actionsCellElement.appendChild(buyBtn);

    rowElement.appendChild(modelTDElement);
    rowElement.appendChild(priceCellElement);
    rowElement.appendChild(actionsCellElement);
    tBodyElement.appendChild(rowElement);

    let hidenRowElement = document.createElement('tr');
    let yearTDelement = document.createElement('td');
    let descriptTD = document.createElement('td');
    descriptTD.setAttribute('colspan', 3);
    descriptTD.textContent = `Description: ${descriptionElement.value}`;
    yearTDelement.textContent = `Year: ${year}`;

    hidenRowElement.classList.add('hide');
    hidenRowElement.style.display = 'none';
    hidenRowElement.appendChild(yearTDelement);
    hidenRowElement.appendChild(descriptTD);

    tBodyElement.appendChild(hidenRowElement);

    let totalPriceElement = document.querySelector('.total-price');

    buttonInfo.addEventListener('click', (e) => {
      if (e.currentTarget.textContent == 'More Info') {
        e.currentTarget.textContent = 'Less Info';
        hidenRowElement.style.display = 'contents';
      } else {
        e.currentTarget.textContent = 'More Info';
        hidenRowElement.style.display = 'none';
      }
    });

    buyBtn.addEventListener('click', (e) => {
      let currentTotalPrice = Number(totalPriceElement.textContent);
      let totalPrice = currentTotalPrice + price;
      totalPriceElement.textContent = totalPrice.toFixed(2);
      rowElement.remove();
      hidenRowElement.remove();
    });
    modelElement.value = '';
    yearElement.value = '';
    descriptionElement.value = '';
    priceElement.value = '';
  });
}
