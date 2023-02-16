function solution() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = [];
      this.currentTask = 0;
    }
    work() {
      console.log(`${this.name}`, this.tasks[this.currentTask]);
      this.currentTask++;
      if (this.tasks.length - 1 < this.currentTask) {
        this.currentTask = 0;
      }
    }
    collectSalary() {
      console.log(`${this.name} recieved ${this.salary} this month`);
    }
  }
  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = ['is working on simple task.'];
    }
  }
  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [
        'is working on complicated task.',
        'is taking time off work.',
        'is supervising junior workers.',
      ];
    }
  }
  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = ['scheduled a meeting.', 'is preparing a quarterly report.'];
      this.dividend = 0;
    }
    collectSalary() {
      console.log(
        `${this.name} recieved ${this.salary + this.dividend} this month`
      );
    }
  }

  return { Employee, Junior, Senior, Manager };
}
const classes = solution();

const junior = new classes.Junior('Ivan', 25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
