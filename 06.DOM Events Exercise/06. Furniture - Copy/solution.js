function solve() {
  //BUTTONS
  const [generateBtnElement, buyBtnElement] = Array.from(
    document.querySelectorAll('button')
  );
  // TEXT AREAS
  const [inputAreaElement, outputBuyElement] = Array.from(
    document.querySelectorAll('textarea')
  );

  generateBtnElement.addEventListener('click', generate);
  buyBtnElement.addEventListener('click', buy);

  function generate() {
    let data = JSON.parse(inputAreaElement.value);

    data.forEach((el) => {
      const trElement = document.createElement('tr');
      const td1 = document.createElement('td');
      const img = document.createElement('img');
      img.src = el.img;
      td1.appendChild(img);
      trElement.appendChild(td1);

      const td2 = document.createElement('td');
      const p2 = document.createElement('p');
      p2.textContent = el.name;
      td2.appendChild(p2);
      trElement.appendChild(td2);

      const td3 = document.createElement('td');
      const p3 = document.createElement('p');
      p3.textContent = Number(el.price);
      td3.appendChild(p3);
      trElement.appendChild(td3);

      const td4 = document.createElement('td');
      const p4 = document.createElement('p');
      p4.textContent = Number(el.decFactor);
      td4.appendChild(p4);
      trElement.appendChild(td4);

      const td5 = document.createElement('td');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      td5.appendChild(checkBox);
      trElement.appendChild(td5);

      document.querySelector('tbody').appendChild(trElement);
    });
  }

  function buy() {
    const checkBoxes = Array.from(
      document.querySelectorAll('tbody input')
    ).filter((el) => el.checked);

    const bought = [];
    let price = 0;
    let decoration = 0;

    checkBoxes.forEach((el) => {
      const parent = el.parentElement.parentElement;
      const data = Array.from(parent.querySelectorAll('p'));
      bought.push(data[0].textContent);
      price += Number(data[1].textContent);
      decoration += Number(data[2].textContent);
    });

    outputBuyElement.textContent += `Bought furniture: ${bought.join(
      ', '
    )}\r\n`;
    outputBuyElement.textContent += `Total price: ${price.toFixed(2)}\r\n`;
    outputBuyElement.textContent += `Average decoration factor: ${
      decoration / checkBoxes.length
    }`;
  }
}
