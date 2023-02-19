const { describe } = require('mocha');

describe('Testing...', () => {
  describe('this func', () => {
    it('Should', () => {});
  });
});





const createElement = (type, content, parent) => {
  const element = document.createElement(type);
  element.textContent = content;
  if (parent) {
    parent.appendChild(element);
  }
  return element;
};