function counterBuilder(initialValue) {
  let counter = 0;

  return function c() {
    counter++;
    console.log(counter);
  };
}

let counter = counterBuilder();
counter();
counter();
counter();

function a() {
  let name1 = 'asdas';
  function b() {
    let name2 = 'asdas';
    function c() {
      let name3 = 'asdas';
      function d() {
        let name4 = 'asdas';
        console.log(this); // It will be global context because a() is invoked globally
      }
      d();
    }
    c();
  }
  b();
}
a();
