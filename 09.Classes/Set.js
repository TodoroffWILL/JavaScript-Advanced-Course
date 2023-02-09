// It looks like ARRAY but with UNIQUE values.Which means it can have ONLY ONE of each.

let numbers = new Set();

numbers.add(1); // Adds 1 to the set
numbers.add(2);
numbers.add(3);
numbers.add(1);

numbers.has(1); // Checks if it has it, like 'hasOwnProperty';

numbers.delete(3); // Deletes the element in it

console.log(numbers);
console.log(Array.from(numbers));
