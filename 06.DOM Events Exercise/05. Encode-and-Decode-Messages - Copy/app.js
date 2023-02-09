function encodeAndDecodeMessages() {
  let isActive = false;
  const encodeBtnElement = document.querySelectorAll('button')[0];
  const decodeBtnElement = document.querySelectorAll('button')[1];

  const textAreaElement = document.querySelectorAll('textarea')[0];
  const toDecryptArea = document.querySelectorAll('textarea')[1];

  encodeBtnElement.addEventListener('click', (e) => {
    isActive = true;
    let encryptMSG = [];
    for (const letter of textAreaElement.value) {
      encryptMSG.push(letter.charCodeAt() + 1);
      textAreaElement.value = '';
    }
    encryptMSG = encryptMSG
      .map((letter) => String.fromCharCode(letter))
      .join('');

    toDecryptArea.value = encryptMSG;
  });
  decodeBtnElement.addEventListener('click', (e) => {
    if (isActive) {
      let decryptMSG = [];
      for (const letter of toDecryptArea.value) {
        decryptMSG.push(letter.charCodeAt() - 1);
      }
      decryptMSG = decryptMSG
        .map((letter) => String.fromCharCode(letter))
        .join('');
      toDecryptArea.value = decryptMSG;
      isActive = false;
    }
  });
}

encodeAndDecodeMessages();
