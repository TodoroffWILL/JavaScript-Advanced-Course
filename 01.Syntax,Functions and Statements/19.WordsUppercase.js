function wordsUpper(words){
const regex = /[A-z0-9]+/g;
let result = words.match(regex).join(", ").toUpperCase();
console.log(result);
}
wordsUpper('Hi, how are you?')

// SIMPLIFIED SOLUTION

// const wordsUpper = (words) => 
//     words
//       .match(/[A-z0-9]+/g)
//       .join(", ")
//       .toUpperCase();
  