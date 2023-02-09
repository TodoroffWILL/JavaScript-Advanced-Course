const person = {
  name: 'Doncho',
  surname: 'Todorov',
  introduce() {
    // Here with arrow ()=> "this" inherits the 'this' context of the previous function !
    const getFullName = () => {
      return this.name + ' ' + this.surname;
    };
    console.log(`Hello, my name is ${getFullName()}`);
  },
};
person.introduce();
