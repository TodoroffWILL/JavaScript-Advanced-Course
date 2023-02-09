// GLOBAL CONTEXT
function random() {
  console.log(this); // In browser is WINDOW
  console.log(globalThis); // BUT in Nodejs its name is GLOBAL
  return Math.random();
}
random(); // Global INVOCATION

// OBJECT CONTEXT
let obj = {
  name: 'Doncho',
  greed() {
    console.log(`Hello! My name is ${this.name}`);
  },
};
obj.greed(); // Method Invocaiton
let greed = obj.greed; // Copy funtion by REFERENCE
greed(); // Now it becomes Global invocation;

// DOM Element - must execute in browser
// element.addEventListener('click',function (){
// console.log(this) // It will refeer to the element on which the event occured !
// same as e.currentTarget !
//})

// Nested functions
function a() {
  function b() {
    function c() {
      function d() {
        console.log(this); // It will be global context because a() is invoked globally
      }
      d();
    }
    c();
  }
  b();
}
a();
