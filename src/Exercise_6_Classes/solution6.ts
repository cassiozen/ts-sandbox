// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Solution 5 – Classes
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Create classes with typed properties and methods
// • Add access modifiers to class members

export default () => {

  // ======== Solution 5.1 ========
  // Goals:
  // • Add explicit parameter type to the greet method
  // • Add explicit return type to the greet method

  class MC {
    greet(event: string = 'party'): string {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log('[Solution 5.1]', mc.greet('show'));


  // ======== Solution 5.2 ========
  // Goals:
  // • Add explicit parameter types to constructor
  // • Add typed parameters for storing values

  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const jane = new Person('Jane', 31);

  console.log('[Solution 5.2]', `The new person's name is ${jane.name}.`);


  // ======== Solution 5.3 ========
  // Goals:
  // • Explicitly make the title and salary properties publicly available
  // • Reduce class to three lines of code while maintaining functionality

  class Employee {
    constructor(public title: string, public salary: number) {}
  }

  const employee = new Employee('Engineer', 100000);

  console.log('[Solution 5.3]', `The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);


  // ======== Solution 5.4 ========
  // Goals:
  // • Add complete typing
  // • Make the Snake class inherit from Animal
  // • Make the Pony class inherit from Animal
  // • Make it so that the name member cannot be publicly accessed

  abstract class Animal {
    constructor(private name: string) {}
    move(meters: number) {
      console.log(`${this.name} moved ${meters}m.`);
    }
  }

  class Snake extends Animal {
    move(meters: number = 5) {
      console.log('Slithering...');
      super.move(meters);
    }
  }

  class Pony extends Animal {
    move(meters: number = 60) {
      console.log('Galloping...');
      super.move(meters);
    }
  }

  const sammy: Snake = new Snake('Sammy the Snake');
  sammy.move();
  // console.log(sammy.name); // Should return error (when uncommented)

  const pokey: Pony = new Pony('Pokey the Pony');
  pokey.move(34);
  // console.log(pokey.name); // Should return error (when uncommented)

  // ======== Solution 5.5 ========
  // Goals:
  // • Make it so that only the Desk and Chair classes can see the
  //   manufacturer member

  class Furniture {
    constructor(protected manufacturer: string = 'IKEA') {}
  }

  class Desk extends Furniture {
    kind() {
      console.log('[Solution 5.5]', `This is a desk made by ${this.manufacturer}`);
    }
  }

  class Chair extends Furniture {
    kind() {
      console.log('[Solution 5.5]', `This is a chair made by ${this.manufacturer}`);
    }
  }

  const desk = new Desk();
  desk.kind();
  // desk.manufacturer; // Should return error (when uncommented)

  const chair = new Chair();
  chair.kind();
  // chair.manufacturer; // Should return error (when uncommented)

  // ======== Solution 5.6 ========
  // Goals:
  // • Eliminate the error without changing references to `Student.school`

  class Student {
    school: string = 'Harry Herpson High School';
    constructor(private name: string) { };
    introduction() {
      console.log('[Solution 5.6]', `Hi, my name is ${this.name} and I attend ${this.school}`);
    }
  }

  const student = new Student('Morty');
  student.introduction();
}
