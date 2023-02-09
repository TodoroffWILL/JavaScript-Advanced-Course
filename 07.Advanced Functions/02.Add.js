function solution(num) {
  function add(a, b) {
    return a + b;
  }

  // Bind
  return add.bind(null, num);
  // The same thing as BIND
  // Partial Application
  return (x) => add(num, x);
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
