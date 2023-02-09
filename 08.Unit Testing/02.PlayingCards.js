function cardFactory(face, suit) {
  const faces = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const suits = {
    S: '\u2660',
    H: '\u2665',
    D: '\u2666',
    C: '\u2663',
  };
  if (face !== 'string' && face !== face.toUpperCase()) {
    throw new Error();
  }
  if (suit !== 'string' && suit !== suit.toUpperCase()) {
    throw new Error();
  }
  const card = {
    face,
    suit,
    toString() {
      console.log(this.face + suits[this.suit]);
    },
  };
  return card;
}
