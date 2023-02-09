// It looks like an OBJECT but with a bit more freedom in it !!
let map = new Map();

map.set('name', 'Doncho');
map.set('age', 27);
map.set('isMale', true);

console.log(map);
console.log(map.get('name')); // Doncho

map.set('age', 21); // Changing the key
console.log(map.keys()); // Returns the keys
console.log(map.values()); // Returns the values

map.set(1, 'One'); // THE KEY CAN BE ANY NUMBER/SYMBOL/OBJECT AS KEY

//Set Objects as KEY !!!

const obj = { name: 'Doncho' };
map.set(obj, 'naDonchoObekta');
console.log(map.get(obj)); // THE KEY IS THE OBJECT 'obj'!
